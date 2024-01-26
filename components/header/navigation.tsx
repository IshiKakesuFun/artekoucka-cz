export type MenuLinkType = {
  title: string;
  href: string;
  isCallToAction?: boolean;
  isCurrent?: boolean;
};

export type NavigationProps = {
  menu?: MenuLinkType[];
};

function MenuItem(item: MenuLinkType) {
  return (
    <li>
      {!item.isCallToAction && !item.isCurrent && (
        <a class="main-nav-link" href={item.href}>{item.title}</a>
      )}
      {!item.isCallToAction && item.isCurrent && (
        <a class="main-nav-link nav-current" href={item.href}>{item.title}</a>
      )}
      {item.isCallToAction && (
        <a class="main-nav-link nav-cta" href={item.href}>{item.title}</a>
      )}
    </li>
  );
}
export default function Navigation(props: NavigationProps) {
  return (
    <nav class="main-nav">
      <ul class="main-nav-list">
        {props.menu?.map((item) => MenuItem(item))}
      </ul>
    </nav>
  );
}
