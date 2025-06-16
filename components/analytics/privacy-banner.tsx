import { useState } from "preact/hooks";

export default function PrivacyBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  if (!isVisible) return null;

  const acceptAll = () => {
    setPreferences({
      necessary: true,
      analytics: true,
      marketing: true,
    });
    // Uložit preferences do localStorage
    localStorage.setItem(
      "cookie-preferences",
      JSON.stringify({
        ...preferences,
        analytics: true,
        marketing: true,
      }),
    );
    setIsVisible(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem("cookie-preferences", JSON.stringify(preferences));
    setIsVisible(false);
  };

  return (
    <div class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 p-4 shadow-lg z-50">
      <div class="container mx-auto">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          <div class="flex-1">
            <h3 class="font-semibold text-gray-900 mb-2">Používáme cookies</h3>
            <p class="text-sm text-gray-600">
              Používáme cookies pro zlepšení funkčnosti a analýzu návštěvnosti.
              Více informací najdete v{" "}
              <a
                href="/informace-o-zpracovani-osobnich-udaju"
                class="text-blue-600 hover:underline"
              >
                zásadách ochrany osobních údajů
              </a>
              .
            </p>
          </div>

          <div class="flex gap-2">
            <button
              type="button"
              onClick={acceptNecessary}
              class="px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50"
            >
              Pouze nezbytné
            </button>
            <button
              type="button"
              onClick={acceptAll}
              class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Přijmout vše
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
