import { PageProps } from "$fresh/server.ts";

export default function CallToAction(_props: PageProps) {
  return (
    <section class="section-cta" id="konzultace-zdarma">
      <div class="container">
        <div class="cta">
          <div class="cta-text-box">
            <h2 class="heading-2">Nezávazná konzultace zdarma!</h2>
            <p class="cta-text">
              Napište mi email, následně se s Vámi spojím a domluvíme si
              nezávaznou konzultaci online nebo telefonicky. Vyjasníme si
              vzájemná očekávání a v čem konkrétně by Vám naše spolupráce měla
              být přínosná. Anebo mi rovnou zavolejte na{" "}
              <a class="cta-link" href="tel:+420602181097">
                +420&nbsp;602&nbsp;181&nbsp;097
              </a>
              .
            </p>

            <form class="cta-form" name="sign-up">
              <div>
                <label for="full-name">Jméno a přímení</label>
                <input
                  id="full-name"
                  type="text"
                  placeholder="Jan Klient"
                  name="full-name"
                  required
                />
              </div>

              <div>
                <label for="email">E-mail</label>
                <input
                  id="email"
                  type="email"
                  placeholder="jan.klient@mojefirma.cz"
                  name="email"
                  required
                />
              </div>

              <div>
                <label for="select-where">Jak jste se o mně dozveděli?</label>
                <select id="select-where" name="select-where" required>
                  <option value="">Vyberte prosím z možností:</option>
                  <option value="recommendation">
                    Osobní doporučení klienta
                  </option>
                  <option value="friends">Přátelé, rodina, známý</option>
                  <option value="social">Sociální sítě</option>
                  <option value="search">Vyhledání na internetu</option>
                  <option value="others">Jinak</option>
                </select>
              </div>

              <button type="submit" class="btn btn--form">
                Objednat konzultaci
              </button>
            </form>
          </div>
          <div
            class="cta-img-box"
            role="img"
            aria-label="Artekoučka Marta Sojková mávající poznámkovým blokem v ataliéru"
          ></div>
        </div>
      </div>
    </section>
  );
}
