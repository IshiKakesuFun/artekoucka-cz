import Footer from "@@/footer/footer.tsx";
import { defaulFooterNavProps } from "@@/footer/footer-nav.tsx";
import Header, { HeaderProps } from "@@/header/header.tsx";
import { MenuLinkType } from "@@/header/navigation.tsx";
import TermsAndConditions from "@@/terms/terms-and-conditions.tsx";

export const mainMenu: MenuLinkType[] = [
  { title: "Artekoučink", href: "/#artekoucink" },
  { title: "Služby", href: "/#nabidka-sluzeb" },
  { title: "Časté dotazy", href: "/#caste-dotazy" },
  { title: "Reference", href: "/#reference" },
  { title: "O mně", href: "/o-mne" },
  {
    title: "Konzultace zdarma",
    href: "/#konzultace-zdarma",
    isCallToAction: true,
  },
];

export default function Terms() {
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
