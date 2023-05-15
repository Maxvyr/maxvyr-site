import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import stylesheet from "~/tailwind.css";
import Container from "../components/Container/Container";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: stylesheet },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>Maxvyr - Solomaker</title>
        <meta
          name="title"
          content="Maxime Vidalinc, Indie Software Developer"
        />
        <meta
          name="description"
          content="Hi my name is Maxime Vidalinc I am a solomaker. Welcome ;p."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://maxvyr.com/" />
        <meta
          property="og:title"
          content="Maxime Vidalinc, Indie Software Developer"
        />
        <meta
          property="og:description"
          content="Hi my name is Maxime Vidalinc I am a solomaker. Welcome ;p."
        />
        <meta
          property="og:image"
          content="Hi my name is Maxime Vidalinc I am a solomaker. Welcome ;p."
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://maxvyr.com/" />
        <meta
          property="twitter:title"
          content="Maxime Vidalinc, Indie Software Developer"
        />
        <meta
          property="twitter:description"
          content="Hi my name is Maxime Vidalinc I am a solomaker. Welcome ;p."
        />
        <meta property="twitter:image" content="" />
        <link rel="shortcut icon" href="/favicon.ico" />

        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        <Meta />
        <Links />
      </head>
      <body>
        <Container>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </Container>
      </body>
    </html>
  );
}
