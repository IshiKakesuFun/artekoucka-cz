import { MenuLinkType } from "@@/header/navigation.tsx";
import FooterNavCol from "@@/footer/footer-nav-col.tsx";

export type FooterMenuType = {
  heading: string;
  href?: string;
  children: MenuLinkType[];
};

export type FooterNavigationProps = {
  menu?: FooterMenuType[];
};

export const defaulFooterNavProps: FooterNavigationProps = {
  menu: [
    {
      heading: "Artekoučka",
      children: [
        {
          title: "Artekoučink",
          href: "/#artekoucink",
        },
        {
          title: "Obvyklá témata",
          href: "/#obvykla-temata",
        },
        {
          title: "Nabídka služeb",
          href: "/#nabidka-sluzeb",
        },
        {
          title: "Časté dotazy",
          href: "/#caste-dotazy",
        },
        {
          title: "Reference",
          href: "/#reference",
        },
      ],
    },
    {
      heading: "Služby",
      href: "/sluzby",
      children: [
        {
          title: "Ateliér",
          href: "/sluzby/#atelier",
        },
        {
          title: "Individuální koučink",
          href: "/sluzby/#individualni-koucink",
        },
        {
          title: "Týmový koučink",
          href: "/sluzby/#tymovy-koucink",
        },
        {
          title: "Na klíč",
          href: "/sluzby/#na-klic",
        },
      ],
    },
    {
      heading: "O mně",
      href: "/o-mne",
      children: [
        {
          title: "Kdo jsem",
          href: "/o-mne",
        },
        {
          title: "Kompetence",
          href: "/o-mne/#kompetence",
        },
        {
          title: "Informace o zpracování osobních údajů",
          href: "/informace-o-zpracovani-osobnich-udaju",
        },
        {
          title: "Obchodní podmínky",
          href: "/obchodni-podminky",
        },
      ],
    },
  ],
};

export default function FooterNav(props: FooterNavigationProps) {
  return (
    <>
      {props.menu?.map((menu) => FooterNavCol(menu))}
    </>
  );
}
