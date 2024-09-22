import { FooterMenuType } from "_/footer/footer-nav.tsx";

export default function FooterNavCol(props: FooterMenuType) {
  return (
    <nav class="nav-col">
      {props.href && (
        <p class="footer-heading">
          <a href={props.href} class="footer-link">
            {props.heading}
          </a>
        </p>
      )}
      {!props.href && <p class="footer-heading">{props.heading}</p>}
      <ul class="footer-nav">
        {props.children.map((item) => (
          <li>
            <a class="footer-link" href={item.href}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
