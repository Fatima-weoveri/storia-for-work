import type { FormEvent } from "react";
import { useId, useRef, useState } from "react";
import PhoneInput, {
  isValidPhoneNumber,
  type Value,
} from "react-phone-number-input";
import en from "react-phone-number-input/locale/en.json";
import "react-phone-number-input/style.css";
import workingSunny from "../../assets/workingSunny.png";

const HELP_OPTIONS = [
  { value: "", label: "Please select" },
  { value: "demo", label: "Book a product demo" },
  { value: "partnership", label: "Partnership / volume pricing" },
  { value: "white-label", label: "White label" },
  { value: "general", label: "General enquiry" },
];

const inputClass =
  "w-full rounded-lg border border-(--storia-black15) bg-(--storia-white) px-3 py-2.5 text-[14px] text-(--storia-black) shadow-none outline-none transition-[box-shadow] focus:border-(--storia-green) focus:ring-2 focus:ring-(--storia-green50)";

const labelClass =
  "mb-1.5 block text-[12px] font-bold tracking-wide text-(--storia-black)";

function buildMailBody(fd: FormData, phoneE164: string): string {
  const lines = [
    `How can we help?: ${fd.get("help") || ""}`,
    `Name: ${fd.get("firstName")} ${fd.get("lastName")}`,
    `Work email: ${fd.get("email")}`,
    `Phone: ${phoneE164}`,
    `Job title: ${fd.get("jobTitle")}`,
  ];
  return lines.join("\n");
}

function openMailtoFallback(fd: FormData, phoneE164: string) {
  const subject = encodeURIComponent("Demo request — Storia for Work");
  const body = encodeURIComponent(buildMailBody(fd, phoneE164));
  window.location.href = `mailto:hello@storia.world?subject=${subject}&body=${body}`;
}

export const ContactCta = () => {
  const uid = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const field = (name: string) => `${uid}-${name}`;
  const [phoneValue, setPhoneValue] = useState<Value | undefined>();
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    if (!phoneValue?.trim()) {
      setPhoneError("Enter your phone number.");
      return;
    }
    if (!isValidPhoneNumber(phoneValue)) {
      setPhoneError("Enter a valid phone number for the selected country.");
      return;
    }
    setPhoneError(null);
    setFormMessage(null);

    const payload = {
      help: String(fd.get("help") ?? ""),
      firstName: String(fd.get("firstName") ?? ""),
      lastName: String(fd.get("lastName") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: phoneValue,
      jobTitle: String(fd.get("jobTitle") ?? ""),
    };

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      let data: { ok?: boolean; error?: string } = {};
      try {
        data = (await res.json()) as { ok?: boolean; error?: string };
      } catch {
        /* non-JSON */
      }

      if (res.ok && data.ok !== false) {
        setFormMessage({
          type: "success",
          text: "Thanks! We've received your request and will be in touch soon.",
        });
        form.reset();
        setPhoneValue(undefined);
        return;
      }

      const msg =
        data.error ||
        (res.status === 503
          ? "This form is not configured yet. Use email below."
          : "Something went wrong. Please try again or email us.");
      setFormMessage({ type: "error", text: msg });
    } catch {
      setFormMessage({
        type: "error",
        text: "Network error. Check your connection or email us instead.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-shell">
      <div className="section-inner max-w-[1080px]">
        <div className="overflow-hidden">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.02fr)] lg:gap-14 lg:items-start">
            <div className="flex min-w-0 flex-col">
              <h2
                className="text-[clamp(1.65rem,3.2vw,2.25rem)] leading-[1.15] font-bold tracking-[-0.02em] text-(--storia-black)"
                style={{ fontFamily: '"DM Sans", sans-serif' }}
              >
                Request a demo to learn more about how we can support your team.
              </h2>
              <p className="mt-5 max-w-[440px] text-[15px] leading-[1.65] text-(--storia-black75)">
                Storia for Work helps organisations build practical reflection
                habits—guided check-ins, pattern insights, and calm nudges—so
                people think more clearly together. Share a few details and
                we&apos;ll follow up to show you how it could fit yours.
              </p>

              <div className="relative mt-6 max-w-[min(100%,380px)] lg:mt-8">
                <div className="relative mx-auto flex justify-center">
                  <img
                    src={workingSunny}
                    alt="Sunny working at a desk with a laptop"
                    className="h-auto w-full max-h-[min(260px,42vw)] object-contain sm:max-h-[280px]"
                  />
                </div>
              </div>
            </div>

            <form
              ref={formRef}
              id="contact-demo-form"
              className="min-w-0 space-y-5"
              onSubmit={onSubmit}
              noValidate
            >
              {formMessage ? (
                <div
                  role="status"
                  className={`rounded-lg border px-4 py-3 text-[14px] leading-snug ${
                    formMessage.type === "success"
                      ? "border-(--storia-green) bg-(--storia-green50) text-(--storia-black)"
                      : "border-(--storia-orange) bg-(--storia-orange50) text-(--storia-black)"
                  }`}
                >
                  {formMessage.text}
                </div>
              ) : null}

              <div>
                <label htmlFor={field("help")} className={labelClass}>
                  How can we help?{" "}
                  <span className="text-(--storia-orange)">*</span>
                </label>
                <select
                  id={field("help")}
                  name="help"
                  required
                  className={`${inputClass} appearance-none bg-[length:1rem] bg-[right_0.65rem_center] bg-no-repeat pr-10`}
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23212529' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                  }}
                  defaultValue=""
                >
                  {HELP_OPTIONS.map((o) => (
                    <option
                      key={o.value || "placeholder"}
                      value={o.value}
                      disabled={o.value === ""}
                    >
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor={field("firstName")} className={labelClass}>
                    First name <span className="text-(--storia-orange)">*</span>
                  </label>
                  <input
                    id={field("firstName")}
                    name="firstName"
                    type="text"
                    required
                    autoComplete="given-name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor={field("lastName")} className={labelClass}>
                    Last name <span className="text-(--storia-orange)">*</span>
                  </label>
                  <input
                    id={field("lastName")}
                    name="lastName"
                    type="text"
                    required
                    autoComplete="family-name"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor={field("email")} className={labelClass}>
                  Work email <span className="text-(--storia-orange)">*</span>
                </label>
                <input
                  id={field("email")}
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor={field("phone")} className={labelClass}>
                  Phone number <span className="text-(--storia-orange)">*</span>
                </label>
                <div
                  className={`contact-phone-input${phoneError ? " contact-phone-input--invalid" : ""}`}
                >
                  <PhoneInput
                    id={field("phone")}
                    labels={en}
                    defaultCountry="GB"
                    international
                    countryCallingCodeEditable={false}
                    limitMaxLength
                    smartCaret
                    value={phoneValue}
                    onChange={(next) => {
                      setPhoneValue(next);
                      if (phoneError) setPhoneError(null);
                    }}
                    autoComplete="tel"
                    aria-invalid={phoneError ? true : undefined}
                    aria-describedby={
                      phoneError ? field("phone-error") : undefined
                    }
                  />
                </div>
                {phoneError ? (
                  <p
                    id={field("phone-error")}
                    className="mt-1.5 text-[12px] text-(--storia-orange)"
                    role="alert"
                  >
                    {phoneError}
                  </p>
                ) : null}
              </div>

              <div>
                <label htmlFor={field("jobTitle")} className={labelClass}>
                  Job title <span className="text-(--storia-orange)">*</span>
                </label>
                <input
                  id={field("jobTitle")}
                  name="jobTitle"
                  type="text"
                  required
                  autoComplete="organization-title"
                  className={inputClass}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 w-full rounded-xl bg-(--storia-black) py-3.5 text-[15px] font-semibold text-(--storia-white) transition-colors hover:bg-(--storia-black75) disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Sending…" : "Request a demo"}
              </button>
              <p className="text-center text-[12px] leading-normal text-(--storia-black50)">
                We&apos;ll only use your details to respond to this request.{" "}
                <button
                  type="button"
                  className="underline decoration-(--storia-black40) underline-offset-2 hover:text-(--storia-black)"
                  onClick={() => {
                    const form = formRef.current;
                    if (form && phoneValue && isValidPhoneNumber(phoneValue)) {
                      openMailtoFallback(new FormData(form), phoneValue);
                      return;
                    }
                    window.location.href =
                      "mailto:hello@storia.world?subject=Demo%20request%20%E2%80%94%20Storia%20for%20Work";
                  }}
                >
                  Email us instead
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
