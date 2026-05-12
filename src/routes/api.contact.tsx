import { createFileRoute } from "@tanstack/react-router";

type ContactPayload = {
  help: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  jobTitle: string;
};

function readString(v: unknown): string {
  return typeof v === "string" ? v.trim() : "";
}

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const scriptUrl = process.env.APPS_SCRIPT_WEBAPP_URL;
        const secret = process.env.FORM_SUBMIT_SECRET;

        if (!scriptUrl?.trim() || !secret?.trim()) {
          return Response.json(
            { ok: false, error: "Contact endpoint is not configured." },
            { status: 503 },
          );
        }

        let json: unknown;
        try {
          json = await request.json();
        } catch {
          return Response.json(
            { ok: false, error: "Expected JSON body." },
            { status: 400 },
          );
        }

        if (!json || typeof json !== "object") {
          return Response.json(
            { ok: false, error: "Invalid JSON body." },
            { status: 400 },
          );
        }

        const body = json as Record<string, unknown>;
        const payload: ContactPayload = {
          help: readString(body.help),
          firstName: readString(body.firstName),
          lastName: readString(body.lastName),
          email: readString(body.email),
          phone: readString(body.phone),
          jobTitle: readString(body.jobTitle),
        };

        if (
          !payload.help ||
          !payload.firstName ||
          !payload.lastName ||
          !payload.email ||
          !payload.phone ||
          !payload.jobTitle
        ) {
          return Response.json(
            { ok: false, error: "Missing required fields." },
            { status: 400 },
          );
        }

        const upstream = await fetch(scriptUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...payload, secret }),
        });

        const raw = await upstream.text();
        if (!upstream.ok) {
          return Response.json(
            {
              ok: false,
              error: "Could not save your request. Please try again or email us.",
            },
            { status: 502 },
          );
        }

        let parsed: { ok?: boolean; error?: string } | null = null;
        try {
          parsed = JSON.parse(raw) as { ok?: boolean; error?: string };
        } catch {
          // Apps Script may return non-JSON on some failures
        }

        if (parsed && parsed.ok === false) {
          return Response.json(
            {
              ok: false,
              error: parsed.error || "Request rejected.",
            },
            { status: upstream.status >= 400 ? upstream.status : 400 },
          );
        }

        return Response.json({ ok: true });
      },
    },
  },
});
