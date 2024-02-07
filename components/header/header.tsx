import Navigation, { MenuLinkType } from "@@/header/navigation.tsx";
import Logo from "@@/header/logo.tsx";
import MobileHeader from "/islands/mobile-header.tsx";

export type HeaderProps = {
  sticky?: boolean;
  menu?: MenuLinkType[];
};

function LargeHeader(props: Omit<HeaderProps, "sticky">) {
  return (
    <>
      <Logo />
      <Navigation {...props} />
    </>
  );
}

export default function Header(props: HeaderProps) {
  return (
    <header class="header">
      <LargeHeader {...props} />
      {/* <MobileHeader {...props} /> */}
    </header>
  );
}
