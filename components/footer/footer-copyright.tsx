import SocialLinks from "_/footer/social-links.tsx";
import Copyright from "_/footer/copyright.tsx";
import DesignBy from "_/footer/design-by.tsx";

export default function FooterCopyRight() {
  return (
    <div class="container footer-copyright">
      <SocialLinks />
      <Copyright />
      <DesignBy />
    </div>
  );
}
