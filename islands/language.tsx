import { State } from "../routes/_middleware.ts";

export default function Language({ lang }: { lang: State["lang"] }) {
  return (
    <button
      class="hover:(text-gray-900 dark:text-gray-100) font-bold focus:outline-none"
      onClick={() => {
        lang === "en"
          ? (document.cookie = "lang=cs")
          : (document.cookie = "lang=en");
        location.reload();
      }}
    >
      {lang === "en" ? "CS" : "EN"}
    </button>
  );
}
