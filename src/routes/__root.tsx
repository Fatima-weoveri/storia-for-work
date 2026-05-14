/// <reference types="vite/client" />
import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import * as React from "react";
import { DefaultCatchBoundary } from "~/components/DefaultCatchBoundary";
import { NotFound } from "~/components/NotFound";
import iconUrl from "../../assets/sunnyBee.png?url";
import appCss from "~/styles/app.css?url";

const RootDocument = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
};

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      { title: "Storia for Work" },
      {
        name: "description",
        content:
          "Storia for Work helps professionals and teams build clarity, spot patterns, and improve performance through guided reflection and practical insight.",
      },
      {
        property: "og:title",
        content:
          "You can't outrun your mind. But you can learn its rhythm at work.",
      },
      {
        property: "og:description",
        content:
          "Storia for Work helps professionals and teams build clarity, spot patterns, and improve performance through guided reflection and practical insight.",
      },
      {
        property: "og:url",
        content: "https://storiaforwork.com",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: "https://storiaforwork.com" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=Fraunces:opsz,wght@9..144,500;9..144,600&display=swap",
      },
      {
        rel: "apple-touch-icon",
        href: iconUrl,
      },
      {
        rel: "icon",
        type: "image/png",
        href: iconUrl,
      },
      { rel: "manifest", href: "/site.webmanifest", color: "#fffff" },
    ],
  }),
  errorComponent: DefaultCatchBoundary,
  notFoundComponent: () => <NotFound />,
  shellComponent: RootDocument,
});
