import FooterCopyRight from "@@/footer/footer-copyright.tsx";
import Address from "@@/footer/address.tsx";
import FooterNav, { FooterNavigationProps } from "@@/footer/footer-nav.tsx";
import FooterLogo from "@@/footer/footer-logo.tsx";

export default function Footer(props: FooterNavigationProps) {
  return (
    <footer class="footer">
      <div class={"container grid grid--footer-" + (props.menu?.length ?? 3)}>
        <FooterLogo />
        <Address />
        <FooterNav {...props} />
      </div>
      <FooterCopyRight />
    </footer>
  );
}
