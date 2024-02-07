import { PageProps } from "$fresh/server.ts";
import FooterCopyRight from "@@/footer/footer-copyright.tsx";
import Address from "@@/footer/address.tsx";
import FooterNav from "@@/footer/footer-nav.tsx";
import FooterLogo from "./footer-logo.tsx";

export default function Footer(props: PageProps) {
  return (
    <footer class="footer">
      <div class="container grid grid--footer">
        <FooterLogo />
        <Address {...props} />
        <FooterNav {...props} />
      </div>
      <FooterCopyRight />
    </footer>
  );
}
