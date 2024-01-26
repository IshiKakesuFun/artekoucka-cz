import { MenuLinkType } from "@@/header/navigation.tsx";

export type ServiceCardType = {
  info: MenuLinkType;
  action: MenuLinkType;
};

export type ServicesProps = {
  services: ServiceCardType[];
};

export default function Services(props: ServicesProps) {
  return (
    <section class="section-services" id="services">
      <div class="container">
        <h2 class="heading-2">Co nabízím</h2>
        <div class="services">
          <div class="service-card">
            <div class="service-card-header">
              <picture>
                <source
                  srcset="images/services/tymovy-koucink.webp"
                  type="image/webp"
                />
                <source
                  srcset="images/services/tymovy-koucink-1280.webp"
                  type="image/webp"
                />
                <source
                  srcset="images/services/tymovy-koucink-640.webp"
                  type="image/webp"
                />
                <img
                  class="service-card-img"
                  src="images/services/tymovy-koucink-640.webp"
                  alt="Skupina klientů malujících na papíry na stěnách ateliéru."
                />
              </picture>
              <div class="service-card-header-text">
                <h3 class="heading-3">Individuální koučink</h3>
              </div>
            </div>
            <div class="service-card-box">
              <ul class="list">
                <li>param 1</li>
                <li>param 2</li>
                <li>param 3</li>
                <li>param 4</li>
                <li>param 5</li>
              </ul>
              <a href="/services" class="btn btn--outline">
                Zjitit více &rarr;
              </a>
              <a href="#cta" class="btn btn--full">Chci konzultaci zdarma</a>
            </div>
          </div>

          <div class="service-card service-card--highlight">
            <div class="service-card-header">
              <picture>
                <source
                  srcset="images/services/tymovy-koucink.webp"
                  type="image/webp"
                />
                <source
                  srcset="images/services/tymovy-koucink-1280.webp"
                  type="image/webp"
                />
                <source
                  srcset="images/services/tymovy-koucink-640.webp"
                  type="image/webp"
                />
                <img
                  class="service-card-img"
                  src="images/services/tymovy-koucink-640.webp"
                  alt="Skupina klientů malujících na papíry na stěnách ateliéru."
                />
              </picture>
              <div class="service-card-header-text">
                <h3 class="heading-3">Týmový koučink</h3>
              </div>
            </div>
            <div class="service-card-box">
              <ul class="list">
                <li>param 1</li>
                <li>param 2</li>
                <li>param 3</li>
                <li>param 3</li>
                <li>param 3</li>
                <li>param 4</li>
                <li>param 5</li>
              </ul>
              <a href="/services" class="btn btn--outline">
                Zjitit více &rarr;
              </a>
              <a href="#cta" class="btn btn--full">Chci konzultaci zdarma</a>
            </div>
          </div>

          <div class="service-card">
            <div class="service-card-header">
              <picture>
                <source
                  srcset="images/services/tymovy-koucink.webp"
                  type="image/webp"
                />
                <source
                  srcset="images/services/tymovy-koucink-1280.webp"
                  type="image/webp"
                />
                <source
                  srcset="images/services/tymovy-koucink-640.webp"
                  type="image/webp"
                />
                <img
                  class="service-card-img"
                  src="images/services/tymovy-koucink-640.webp"
                  alt="Skupina klientů malujících na papíry na stěnách ateliéru."
                />
              </picture>
              <div class="service-card-header-text">
                <h3 class="heading-3">Práce s týmem na klíč</h3>
              </div>
            </div>
            <div class="service-card-box">
              <ul class="list">
                <li>param 1</li>
                <li>param 2</li>
                <li>param 3</li>
                <li>param 4</li>
                <li>param 5</li>
              </ul>
              <div class="service-card-actions">
                <a href="/services" class="btn btn--outline">
                  Zjitit více &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
