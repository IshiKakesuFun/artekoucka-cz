import { T } from "/state.ts";

export default function CopyRight() {
  const t = T.value!;
  return (
    <div>
      <div class="text-sm">
        {"\u00A9"} {new Date().getFullYear()} {t.footer.copyright.owner} | {t.footer.copyright.rights}
      </div>
    </div>
  );
}
