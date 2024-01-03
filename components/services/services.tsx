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
            <picture>
            </picture>
            <h3 class="heading-3">Individuální koučink</h3>
            <div class="service-params">
              <ul class="list">
                <li>param 1</li>
                <li>param 2</li>
                <li>param 3</li>
                <li>param 4</li>
                <li>param 5</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
