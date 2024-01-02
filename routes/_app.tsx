import { PageProps } from "$fresh/server.ts";
import { asset } from "$fresh/runtime.ts";

export default function App({ Component }: PageProps) {
  return (
    <html lang="cs">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href={asset(
            "https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap",
          )}
          rel="stylesheet"
        />
        <link
          href={asset(
            "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap",
          )}
          rel="stylesheet"
        />

        <link rel="stylesheet" href={asset("css/general.css")} />
        <link rel="stylesheet" href={asset("css/style.css")} />
        <link rel="stylesheet" href={asset("css/queries.css")} />

        <title>Artekoučka &mdash; Mgr. Marta Sojková, MBA</title>
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
