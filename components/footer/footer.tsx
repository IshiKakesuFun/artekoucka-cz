import { PageProps } from "$fresh/server.ts";
import CopyRight from "@@/footer/copyright.tsx";
import Address from "@@/footer/address.tsx";
import FooterNav from "@@/footer/footer-nav.tsx";
import SocialLinks from "@@/footer/social-links.tsx";
import Logo from "@@/footer/logo.tsx";

export default function Footer(props: PageProps) {
  return (
    <footer class="footer">
      <div class="container grid grid--footer">
        <div class="logo-col">
          <Logo />
          <SocialLinks />
        </div>
        <Address {...props} />
        <FooterNav {...props} />
      </div>
      <CopyRight />
    </footer>
  );
}
