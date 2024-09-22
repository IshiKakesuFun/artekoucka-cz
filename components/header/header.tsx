import Navigation, { MenuLinkType } from "_/header/navigation.tsx";
import MobileNavigation from "~/mobile-navigation.tsx";
import Logo from "_/header/logo.tsx";

export type HeaderProps = {
  sticky?: boolean;
  menu?: MenuLinkType[];
};

function MenuHeader(props: Omit<HeaderProps, "sticky">) {
  return (
    <div class="header-container">
      <Logo />
      <Navigation {...props} />
      <MobileNavigation {...props} />
    </div>
  );
}

export default function Header(props: HeaderProps) {
  return (
    <header class="header">
      <MenuHeader {...props} />
    </header>
  );
}
