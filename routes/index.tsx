import { PageProps } from "$fresh/server.ts";
import Hero from "@@/hero/hero.tsx";
import Footer from "@@/footer/footer.tsx";
import { defaulFooterNavProps } from "@@/footer/footer-nav.tsx";
import Header, { HeaderProps } from "@@/header/header.tsx";
import { MenuLinkType } from "@@/header/navigation.tsx";
import Artekoucink, {
  defaultArtekoucinkProps,
} from "@@/artekoucing/artekoucink.tsx";
import Services from "@@/services/services.tsx";
import Faq, { defaultFaqProps } from "@@/faq/faq.tsx";
import Testimonials, {
  defaultTestimonialProps,
} from "@@/testimonials/testimonials.tsx";
import AboutMe from "@@/about-me/about-me.tsx";
import CallToAction from "@@/cta/call-to-action.tsx";

export const mainMenu: MenuLinkType[] = [
  { title: "Artekoučink", href: "/#artekoucink" },
  { title: "Služby", href: "/#nabidka-sluzeb" },
  { title: "Časté dotazy", href: "/#caste-dotazy" },
  { title: "Reference", href: "/#reference" },
  { title: "O mně", href: "/o-mne" },
  {
    title: "Konzultace zdarma",
    href: "#konzultace-zdarma",
    isCallToAction: true,
  },
];

export default function Home(props: PageProps<null>) {
  const headerProps: HeaderProps = { menu: mainMenu };
  return (
    <>
      <Header {...headerProps} />
      <main>
        <Hero />
        <Artekoucink {...defaultArtekoucinkProps} />
        <Services />
        <Faq {...defaultFaqProps} />
        <Testimonials {...defaultTestimonialProps} />
        <CallToAction {...props} />
        <AboutMe />
      </main>
      <Footer {...defaulFooterNavProps} />
    </>
  );
}
