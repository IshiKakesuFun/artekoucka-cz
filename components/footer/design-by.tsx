import { PriKakesuFun, PriLogoDenoFresh } from "@icons";

export default function DesignBy() {
  return (
    <div class="copyright">
      <span class="copyright-design">
        <span>Design by</span>
        <a class="footer-link" href="javascript:void(0);" title="Kakesu.Fun">
          <PriKakesuFun class="copyright-icon"></PriKakesuFun>
        </a>
      </span>
      <span class="copyright-design">
        <span>Created with</span>
        <a
          class="footer-link"
          href="https://fresh.deno.dev"
          title="Deno FRESH"
          target="_blank"
        >
          <PriLogoDenoFresh
            class="copyright-icon--fresh"
            secondColor="#fff4d1"
          ></PriLogoDenoFresh>
        </a>
      </span>
    </div>
  );
}
