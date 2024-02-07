import { PageProps } from "$fresh/server.ts";
import { PriVideocamOutline, PriBagCheckOutline } from "@icons";

export default function ServiceIndividual(props: PageProps) {
  return (
    <section class="section-service" id="individualni-koucink">
      <div class="container">
        <h2 class="heading-2">Individuální koučink</h2>
        <span class="subheading">Jak to funguje</span>
        <ul class="list">
          <li class="list-item">
            <PriVideocamOutline class="list-icon"></PriVideocamOutline>
            <p class="service-text">
              Na začátku naší spolupráce společně absolvujeme úvodní konzultaci
              v délce cca 20 min telefonicky či on-line, abychom si vyjasnili
              vzájemná očekávání a v čem konkrétně by vám služba měla být
              přínosná. Poznáme se a zjistíme, jestli si navzájem sedíme. Tato
              schůzka je zdarma a je zcela nezávazná.
            </p>
          </li>
          <li class="list-item">
            <PriBagCheckOutline class="list-icon"></PriBagCheckOutline>
            <p class="service-text">
              Pokud se domluvíme na spolupráci, následuje setkání či série
              setkání. Balíček schůzek je pro dlouhodobou práci, udržitelnost a
              efekt významně lepší. Četnost setkání se odvíjí od cíle.
            </p>
          </li>
          <li class="list-item">
            <PriVideocamOutline class="list-icon"></PriVideocamOutline>
            <p class="service-text">
              Sezení v délce 60 - 90 min probíhá v ateliéru ve Vochově, kde jsou
              koučovanému k dispozici veškeré pomůcky a zázemí. Rozsah využití
              kreativních technik závisí na vůli klienta. Po skončení dostává
              klient zápis ze sezení.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
