import { PageProps } from "$fresh/server.ts";
import { asset } from "$fresh/runtime.ts";
import Gtag from "_/analytics/gtag.tsx";
import PrivacyBanner from "_/analytics/privacy-banner.tsx";

export default function App({ Component }: PageProps) {
  const isProduction = Deno.env.get("DENO_ENV") === "production";
  const gtmId = Deno.env.get("GOOGLE_ANALYTICS_ID");
  return (
    <html lang="cs">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* SEO Meta Tags */}
        <meta
          name="description"
          content="Profesionální artekoučink s Mgr. Martou Sojkovou, MBA, ACC. Individuální a týmový koučink s využitím kreativních technik v inspirativním ateliéru ve Vochově u Plzně."
        />
        <meta
          name="keywords"
          content="koučink, artekoučink, týmový koučink, individuální koučink, Plzeň, Vochov, Marta Sojková, kreativní techniky"
        />
        <meta name="author" content="Mgr. Marta Sojková, MBA, ACC" />

        {/* Fonts */}
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

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Artekoučka - Mgr. Marta Sojková, MBA, ACC"
        />
        <meta
          property="og:description"
          content="Profesionální artekoučink - individuální a týmový koučink s využitím kreativních technik."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://artekoucka.cz" />
        <meta
          property="og:image"
          content="https://artekoucka.cz/images/og-image.jpg"
        />
        <meta property="og:locale" content="cs_CZ" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Artekoučka - Mgr. Marta Sojková, MBA, ACC"
        />
        <meta
          name="twitter:description"
          content="Profesionální artekoučink - individuální a týmový koučink s využitím kreativních technik."
        />
        <meta
          name="twitter:image"
          content="https://artekoucka.cz/images/og-image.jpg"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://artekoucka.cz" />

        {/* Stylesheets */}
        <link rel="stylesheet" href={asset("css/general.css")} />
        <link rel="stylesheet" href={asset("css/style.css")} />
        <link rel="stylesheet" href={asset("css/queries.css")} />

        {/* Preload kritických zdrojů */}
        <link
          rel="preload"
          href={asset("images/artekoucka-hero-1344.webp")}
          as="image"
        />

        {/* Analytics */}
        {isProduction && gtmId && <Gtag measurementId={gtmId} />}

        <title>Artekoučka &mdash; Mgr. Marta Sojková, MBA, ACC</title>
      </head>
      <body>
        <Component />

        {/* Privacy Banner */}
        {isProduction && <PrivacyBanner />}
      </body>
    </html>
  );
}
