import { PriLogoLinkedin, PriLogoSojkAtelier } from "@icons";

export default function SocialLinks() {
  return (
    <div class="copyright">
      <ul class="social-links">
        <li>
          <a
            class="footer-link"
            href="https://www.linkedin.com/in/marta-sojkov%C3%A1-28b62064/"
            target="_blank"
          >
            <PriLogoLinkedin class="social-icon"></PriLogoLinkedin>
          </a>
        </li>
        <li>
          <a
            class="footer-link"
            href="https://www.sojkatelier.cz"
            target="_blank"
            title="SojkAtelier"
          >
            <PriLogoSojkAtelier class="social-icon"></PriLogoSojkAtelier>
          </a>
        </li>
      </ul>
    </div>
  );
}
