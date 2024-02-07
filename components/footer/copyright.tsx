import { PriKakesuFun, PriLogoDenoFresh } from "@icons";

export default function CopyRight() {
  return (
    <div class="container footer-copyright">
      <div class="copyright">
        {"\u00A9"}
        {new Date().getFullYear()} Mgr. Marta Sojková, MBA.{" "}
        Všechna práva vyhrazena.
      </div>
      <div class="copyright">
        <span class="copyright-design">
          <span>
            Design by
          </span>
          <a
            class="footer-link"
            href="https://artekoucka-cz.deno.dev"
            title="Kakesu.Fun"
            target="_blank"
          >
            <PriKakesuFun class="copyright-icon"></PriKakesuFun>
          </a>
        </span>
        <span class="copyright-design">
          <span>
            Created with
          </span>
          <a class="footer-link" href="https://fresh.deno.dev" title="Deno FRESH" target="_blank">
            <PriLogoDenoFresh class="copyright-icon--fresh" secondColor="#fff4d1">
            </PriLogoDenoFresh>
          </a>
        </span>
      </div>
    </div>
  );
}
