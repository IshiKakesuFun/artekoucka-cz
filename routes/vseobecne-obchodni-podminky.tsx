import Footer from "_/footer/footer.tsx";
import { defaulFooterNavProps } from "_/footer/footer-nav.tsx";
import Header, { HeaderProps } from "_/header/header.tsx";
import { MenuLinkType } from "_/header/navigation.tsx";
import TermsAndConditions from "_/terms/terms-and-conditions.tsx";
import { PageProps } from "$fresh/server.ts";

export const mainMenu: MenuLinkType[] = [
  { title: "Artekoučink", href: "/#artekoucink" },
  { title: "Služby", href: "/#nabidka-sluzeb" },
  { title: "Časté dotazy", href: "/#caste-dotazy" },
  { title: "Reference", href: "/#reference" },
  { title: "O mně", href: "/o-mne" },
  {
    title: "Konzultace zdarma",
    href: "https://calendly.com/artekoucka/uvodni-konzultace",
    target: "_blank",
    isCallToAction: true,
  },
];

export default function Terms(_props: PageProps<null>) {
  const headerProps: HeaderProps = { menu: mainMenu };
  return (
    <>
      <Header {...headerProps} />
      <main>
        <TermsAndConditions />
      </main>
      <Footer {...defaulFooterNavProps} />
    </>
  );
}
