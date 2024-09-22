import FooterCopyRight from "_/footer/footer-copyright.tsx";
import Address from "_/footer/address.tsx";
import FooterNav, { FooterNavigationProps } from "_/footer/footer-nav.tsx";
import FooterLogo from "_/footer/footer-logo.tsx";

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
