import { PageProps } from "$fresh/server.ts";

export default function HeroAboutMe(props: PageProps) {
  return (
    <section class="section-hero">
      <div class="hero">
        <div class="hero-img-box">
          <picture>
            <source
              srcset="images/about-me/artekoucka-about-me-2688.webp"
              type="image/webp"
            />
            <source
              srcset="images/about-me/artekoucka-about-me-1344.webp"
              type="image/webp"
            />
            <img
              src="images/about-me/artekoucka-about-me-1344.webp"
              class="hero-img"
              alt="Artekoučka Marta Sojková s paletou v rukou stojící venku"
            />
          </picture>
        </div>
        <div class="hero-text-box-about">
          <div class="hero-text-box-inner-about">
            <h1 class="heading-1">
              Zažijte koučink, kde barvy nejsou jen odstíny, ale klíče k
              odemknutí vašeho potenciálu.
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
