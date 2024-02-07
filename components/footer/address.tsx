import { PageProps } from "$fresh/server.ts";

export default function Address(props: PageProps) {
  return (
    <div class="address-col">
      <p class="footer-heading">Kontakt</p>
      <address class="contacts">
        <p class="address">
          Mgr. Marta Sojková, MBA<br />
          Vochov&nbsp;3, 330&nbsp;23
        </p>
        <p class="address">
          <a class="footer-link" href="tel:+420602181097">
            +420&nbsp;602&nbsp;181&nbsp;097
          </a>
          <br />
          <a class="footer-link" href="mailto:marta@artekoucka.com">
            marta@artekoucka.cz
          </a>
        </p>
        <p class="address">IČ: 02146401</p>
      </address>
    </div>
  );
}
