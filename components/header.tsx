import MobileHeader from "/islands/mobile-header.tsx";
import { State } from "/routes/_middleware.ts";

export type Menu = {
  title: string;
  href: string;
  target?: string;
};

export type HeaderProps = {
  active: string;
  sticky?: boolean;
  left?: Menu[];
  right?: Menu[];
  lang: State["lang"];
};

function LargeHeader(props: Omit<HeaderProps, "sticky">) {
  return (
    <>
    </>
  );
}

export default function Header(props: HeaderProps) {
  const menus: Menu[] = [];
  props.right = props.right ?? menus;
  return (
    <header
      class={`w-full bg-gray-200 dark:bg-gray-700 ${
        props.sticky ?? "sticky top-0 z-10 -mb-12 sm:-mb-14"
      }`}
    >
      <LargeHeader {...props} />
      <MobileHeader {...props} />
    </header>
  );
}
