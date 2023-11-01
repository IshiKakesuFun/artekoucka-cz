import { AppProps } from "$fresh/server.ts";
import { asset } from "$fresh/runtime.ts";

export default function App({ Component }: AppProps) {
  return (
    <html lang="cs">
      <head>
        <title>Artekoučka</title>
      </head>
      <body>
        aaa
        <nav />
        <Component />
        <footer />
      </body>
    </html>
  );
}
