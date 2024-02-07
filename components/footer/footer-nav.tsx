import { PageProps } from "$fresh/server.ts";

export default function FooterNav(prop: PageProps) {
  return (
    <>
      <nav class="nav-col">
        <p class="footer-heading">Artekoučka</p>
        <ul class="footer-nav">
          <li>
            <a class="footer-link" href="/#artekoucink">Artekoučink</a>
          </li>
          <li>
            <a class="footer-link" href="/#obvykla-temata">Obvyklá témata</a>
          </li>
          <li>
            <a class="footer-link" href="/#nabidka-sluzeb">Nabídka služeb</a>
          </li>
          <li>
            <a class="footer-link" href="/#caste-dotazy">Časté dotazy</a>
          </li>
          <li>
            <a class="footer-link" href="/#reference">Reference</a>
          </li>
        </ul>
      </nav>
      <nav class="nav-col">
        <p class="footer-heading">Služby</p>
        <ul class="footer-nav">
          <li>
            <a class="footer-link" href="/sluzby/#atelier">Ateliér</a>
          </li>
          <li>
            <a class="footer-link" href="/sluzby/#individualni-koucink">
              Individuální koučink
            </a>
          </li>
          <li>
            <a class="footer-link" href="/sluzby/#tymovy-koucink">
              Týmový koučink
            </a>
          </li>
          <li>
            <a class="footer-link" href="/sluzby/#na-klic">Na klíč</a>
          </li>
        </ul>
      </nav>
      <nav class="nav-col">
        <p class="footer-heading">O mně</p>
        <ul class="footer-nav">
          <li>
            <a class="footer-link" href="/o-mne/">
              Kdo jsem
            </a>
          </li>
          <li>
            <a class="footer-link" href="/o-mne/#kompetence">Kompetence</a>
          </li>
          <li>
            <a class="footer-link" href="/gdpr">GDPR</a>
          </li>
          <li>
            <a class="footer-link" href="/obchodni-podminky">
              Obchodní podmínky
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
