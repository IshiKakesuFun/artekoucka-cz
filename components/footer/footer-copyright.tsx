import SocialLinks from "@@/footer/social-links.tsx";
import Copyright from "@@/footer/copyright.tsx";
import DesignBy from "@@/footer/design-by.tsx";

export default function FooterCopyRight() {
  return (
    <div class="container footer-copyright">
      <SocialLinks />
      <Copyright />
      <DesignBy />
    </div>
  );
}
