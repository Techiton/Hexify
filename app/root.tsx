import type { MetaFunction } from "@remix-run/node";
import type { LinksFunction } from "@remix-run/node";
import styles from "../styles/production.css"
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Hexify",
  viewport: "width=device-width,initial-scale=1",
  "og:title": "Hexify",
  "og:description": "Hexify is a new solution to allow Freelancers and Companies to easily interact with each other. We also provide resources to help Freelancers enhance thier career. Hexify also provides a platform for Companies to look for Reliable Freelancers to Complete Projects.",
  "twitter:card": "summary",
  "twitter:title": "Hexify",
  "twitter:description": "Hexify is a new solution to allow Freelancers and Companies to easily interact with each other. We also provide resources to help Freelancers enhance thier career. Hexify also provides a platform for Companies to look for Reliable Freelancers to Complete Projects."
});

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "icon",
      href: "/Hexify.png",
      type: "image/png",
    }
]
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
