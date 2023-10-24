import { AppProps } from "$fresh/server.ts";

export default function App({ Component }: AppProps) {
  return (
    <html lang="cs">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />

        <title>Artekoučka</title>
      </head>
      <body>
        <nav />
        <Component />
        <footer />
      </body>
    </html>
  );
}
