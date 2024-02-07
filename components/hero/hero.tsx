import { PageProps } from "$fresh/server.ts";

export default function Hero(props: PageProps) {
  return (
    <section class="section-hero">
      <div class="hero">
        <div class="hero-img-box">
          <picture>
            <source
              srcset="images/artekoucka-hero-2688.webp"
              type="image/webp"
            />
            <source
              srcset="images/artekoucka-hero-1344.webp"
              type="image/webp"
            />
            <img
              src="images/artekoucka-hero-1344.webp"
              class="hero-img"
              alt="Artekoučka Marta Sojková stojící přená o stěnu v ateleriéru"
            />
          </picture>
        </div>
        <div class="hero-text-box">
          <div class="hero-text-box-inner">
            <h1 class="heading-1">
              Zažijte koučink, kde barvy nejsou jen odstíny, ale klíče k
              odemknutí vašeho potenciálu.
            </h1>
            <p class="hero-description">
              Otevřete svou mysl v porostorách výtvarného ateliéru. Zde
              neexistují chyby, pouze příležitosti k dalšímu zkoumání a
              objevování. Vaše paleta je nekonečná, tak jako vaše schopnost
              tvořit. Vyjděte za hranice obvyklého. Najděte inspiraci v
              nečekaných zdrojích. Objevte nová řešení pro individální i týmový
              růst.
            </p>
            <a href="#konzultace-zdarma" class="btn btn--full">Nezávazná konzultace zdarma</a>
          </div>
        </div>
      </div>
    </section>
  );
}
