export interface GtagProps {
  measurementId: string;
}

export default function Gtag({ measurementId }: GtagProps) {
  // Pouze pro produkci
  if (Deno.env.get("DENO_ENV") !== "production") {
    return null;
  }

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', {
              page_title: document.title,
              page_location: window.location.href,
              anonymize_ip: true,
              allow_google_signals: false,
              allow_ad_personalization_signals: false
            });
            
            // Custom events tracking
            gtag('event', 'page_view', {
              page_title: document.title,
              page_location: window.location.href
            });
          `,
        }}
      />
    </>
  );
}
