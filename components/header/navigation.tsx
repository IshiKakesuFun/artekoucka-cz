export type MenuLinkType = {
  title: string;
  href: string;
  isCallToAction?: boolean;
  isCurrent?: boolean;
  target?: string;
};

export type NavigationProps = {
  menu?: MenuLinkType[];
};

function MenuItem(item: MenuLinkType) {
  return (
    <li>
      {!item.isCallToAction && !item.isCurrent && item.target && (
        <a class="main-nav-link" href={item.href} target={item.target}>
          {item.title}
        </a>
      )}
      {!item.isCallToAction && !item.isCurrent && !item.target && (
        <a class="main-nav-link" href={item.href}>
          {item.title}
        </a>
      )}
      {!item.isCallToAction && item.isCurrent && item.target && (
        <a
          class="main-nav-link nav-current"
          href={item.href}
          target={item.target}
        >
          {item.title}
        </a>
      )}
      {!item.isCallToAction && item.isCurrent && !item.target && (
        <a class="main-nav-link nav-current" href={item.href}>
          {item.title}
        </a>
      )}
      {item.isCallToAction && item.target && (
        <a class="main-nav-link nav-cta" href={item.href} target={item.target}>
          {item.title}
        </a>
      )}
      {item.isCallToAction && !item.target && (
        <a class="main-nav-link nav-cta" href={item.href}>
          {item.title}
        </a>
      )}
    </li>
  );
}
export default function Navigation(props: NavigationProps) {
  return (
    <nav class="main-nav">
      <ul class="main-nav-list">{props.menu?.map((item) => MenuItem(item))}</ul>
    </nav>
  );
}
