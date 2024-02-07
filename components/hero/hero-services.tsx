import { PageProps } from "$fresh/server.ts";

export default function HeroServices(props: PageProps) {
  return (
    <section class="section-hero">
      <div class="hero">
        <div class="hero-img-box">
          <picture>
            <source
              srcset="images/services/artekoucka-services-2688.webp"
              type="image/webp"
            />
            <source
              srcset="images/services/artekoucka-services-1344.webp"
              type="image/webp"
            />
            <img
              src="images/about-me/artekoucka-services-1344.webp"
              class="hero-img"
              alt="Artekoučka Marta Sojková sedící s diářem v ruce"
            />
          </picture>
        </div>
        <div class="hero-text-box-services">
          <div class="hero-text-box-inner-services">
            <h1 class="heading-1">
              Jsem profesionální koučka, která miluje ruce umazané od barev. Mám
              kuráž pokládat trefné otázky. Těší mě, když se věci hýbou.
            </h1>
            <p class="hero-description">
            </p>
            <a href="#konzultace-zdarma" class="btn btn--full">Nezávazná konzultace zdarma</a>
          </div>
        </div>
      </div>
    </section>
  );
}
