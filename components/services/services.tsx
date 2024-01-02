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
      </div>
    </section>
  );
}
