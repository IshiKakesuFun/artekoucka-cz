import { PriKakesuFun, PriLogoDenoFresh, PriLogoLinkedin } from "@icons";

export default function SocialLinks() {
  return (
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
        <a href="https://sojkatelier.cz" target="_blank" class="footer-link">
          <PriKakesuFun class="social-icon">
          </PriKakesuFun>
        </a>
      </li>
    </ul>
  );
}
