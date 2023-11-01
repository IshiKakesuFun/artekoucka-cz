import { State } from "/routes/_middleware.ts";

export default function Language({ lang }: { lang: State["lang"] }) {
  return (
    <button
      class="hover:(text-gray-900 dark:text-gray-100) font-bold focus:outline-none"
      onClick={() => {
        lang === "cs"
          ? (document.cookie = "lang=en")
          : (document.cookie = "lang=cs");
        location.reload();
      }}
    >
      {lang === "cs" ? "EN" : "CS"}
    </button>
  );
}
