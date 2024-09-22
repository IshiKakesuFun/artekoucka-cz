import { MenuLinkType } from "_/header/navigation.tsx";
import { PriCheckmarkDone, PriCheckmark, PriClose } from "@icons";

export type ServiceCardType = {
  info: MenuLinkType;
  action: MenuLinkType;
};

export default function Services() {
  return (
    <section class="section-services" id="nabidka-sluzeb">
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
                <li class="list-item">
                  <span>
                    Úvodní konzultace v délce <strong>20</strong> minut{" "}
                    <strong>zdarma</strong>
                  </span>
                </li>
                <li class="list-item">
                  <span>
                    Sezení v délce <strong>60-90</strong> minut:
                  </span>
                </li>
                <li class="list-item">
                  <PriCheckmarkDone class="list-icon list-icon--green"></PriCheckmarkDone>
                  <span>V ateliéru s možností využití kreativních technik</span>
                </li>
                <li class="list-item">
                  <PriCheckmark class="list-icon list-icon--green"></PriCheckmark>
                  <span>U klienta</span>
                </li>
                <li class="list-item">
                  <PriCheckmark class="list-icon list-icon--green"></PriCheckmark>
                  <span>On-line</span>
                </li>
                <li class="list-item">
                  <span>
                    Cena od <strong>1800</strong>&nbsp;Kč/sezení
                  </span>
                </li>
              </ul>
              <a href="/sluzby/#individualni-koucink" class="btn btn--outline">
                Zjistit více &rarr;
              </a>
              <a
                href="https://calendly.com/artekoucka/uvodni-konzultace"
                target="_blank"
                class="btn btn--full"
              >
                Chci konzultaci zdarma
              </a>
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
                <li class="list-item">
                  <span>
                    Úvodní konzultace v délce <strong>20</strong> minut{" "}
                    <strong>zdarma</strong>
                  </span>
                </li>
                <li class="list-item">
                  <span>
                    Individuální rozhovory se zadavetelem a členy týmu
                  </span>
                </li>
                <li class="list-item">
                  <span>
                    Týmové setkání <strong>4 a více</strong>&nbsp;hodin:
                  </span>
                </li>
                <li class="list-item">
                  <PriCheckmarkDone class="list-icon list-icon--green"></PriCheckmarkDone>
                  <span>V ateliéru s možností využití kreativních technik</span>
                </li>
                <li class="list-item">
                  <PriCheckmark class="list-icon list-icon--green"></PriCheckmark>
                  <span>U klienta</span>
                </li>
                <li class="list-item">
                  <PriClose class="list-icon list-icon--red"></PriClose>
                  <span>On-line</span>
                </li>
                <li class="list-item">
                  <span>
                    Cena od <strong>3000</strong>&nbsp;Kč/hodinu
                  </span>
                </li>
              </ul>
              <a href="/sluzby/#tymovy-koucink" class="btn btn--outline">
                Zjistit více &rarr;
              </a>
              <a
                href="https://calendly.com/artekoucka/uvodni-konzultace"
                target="_blank"
                class="btn btn--full"
              >
                Chci konzultaci zdarma
              </a>
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
                <li class="list-item">
                  <span>
                    Úvodní konzultace v délce <strong>20</strong> minut{" "}
                    <strong>zdarma</strong>
                  </span>
                </li>
                <li class="list-item">
                  <span>Školení efektivní komunikace</span>
                </li>
                <li class="list-item">
                  <span>Teambuildingová setkání, firemní večírky a akce</span>
                </li>
                <li class="list-item">
                  <PriCheckmarkDone class="list-icon list-icon--green"></PriCheckmarkDone>
                  <span>V ateliéru s možností využití kreativních technik</span>
                </li>
                <li class="list-item">
                  <PriCheckmark class="list-icon list-icon--green"></PriCheckmark>
                  <span>U klienta</span>
                </li>
                <li class="list-item">
                  <PriClose class="list-icon list-icon--red"></PriClose>
                  <span>On-line</span>
                </li>
                <li class="list-item">
                  <span>
                    Cena od <strong>2500</strong>&nbsp;Kč/hodinu
                  </span>
                </li>
              </ul>
              <a href="/sluzby/#na-klic" class="btn btn--outline">
                Zjistit více &rarr;
              </a>
              <a
                href="https://calendly.com/artekoucka/uvodni-konzultace"
                target="_blank"
                class="btn btn--full"
              >
                Chci konzultaci zdarma
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
