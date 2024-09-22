import { MenuLinkType } from "_/header/navigation.tsx";
import { signal } from "@preact/signals";

export type MobileNavigationProps = {
  menu?: MenuLinkType[];
};
const menuOpenSignal = signal(false);

function MobileMenuItem(item: MenuLinkType) {
  const closeMenu = () => {
    menuOpenSignal.value = false; // Close the menu after a link is clicked
  };

  return (
    <li>
      {!item.isCallToAction && !item.isCurrent && item.target && (
        <a
          class="mobile-nav-link"
          href={item.href}
          onClick={closeMenu}
          target={item.target}
        >
          {item.title}
        </a>
      )}
      {!item.isCallToAction && !item.isCurrent && !item.target && (
        <a class="mobile-nav-link" href={item.href} onClick={closeMenu}>
          {item.title}
        </a>
      )}
      {!item.isCallToAction && item.isCurrent && item.target && (
        <a
          class="mobile-nav-link nav-current"
          href={item.href}
          onClick={closeMenu}
          target={item.target}
        >
          {item.title}
        </a>
      )}
      {!item.isCallToAction && item.isCurrent && !item.target && (
        <a
          class="mobile-nav-link nav-current"
          href={item.href}
          onClick={closeMenu}
        >
          {item.title}
        </a>
      )}
      {item.isCallToAction && item.target && (
        <a
          class="mobile-nav-link nav-cta"
          href={item.href}
          onClick={closeMenu}
          target={item.target}
        >
          {item.title}
        </a>
      )}
      {item.isCallToAction && !item.target && (
        <a class="mobile-nav-link nav-cta" href={item.href} onClick={closeMenu}>
          {item.title}
        </a>
      )}
    </li>
  );
}

function Hamburger() {
  const toggleMenu = () => {
    menuOpenSignal.value = !menuOpenSignal.value;
  };

  return (
    /* Hamburger/Close button */
    <button class="mobile-nav-toggle" onClick={toggleMenu}>
      <span
        class={menuOpenSignal.value ? "menu-icon close" : "menu-icon hamburger"}
      ></span>
    </button>
  );
}

export default function MobileNavigation(props: MobileNavigationProps) {
  return (
    <>
      <Hamburger />
      <nav class={menuOpenSignal.value ? "mobile-nav open" : "mobile-nav"}>
        <ul class="mobile-nav-list">
          {props.menu?.map((item) => MobileMenuItem(item))}
        </ul>
      </nav>
    </>
  );
}
