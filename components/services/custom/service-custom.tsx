import { PriCheckmark, PriBagCheckOutline } from "@icons";

export default function ServiceCustom() {
  return (
    <section class="section-service" id="na-klic">
      <div class="container">
        <h2 class="heading-2">Další formy práce s týmem na klíč</h2>
        <ul class="list">
          <li class="list-item">
            <PriCheckmark class="list-icon"></PriCheckmark>
            <span>
              Školení efektivní komunikace
            </span>
          </li>
          <li class="list-item">
            <PriCheckmark class="list-icon"></PriCheckmark>
            <span>
              Teambuildingová setkání
            </span>
          </li>
          <li class="list-item">
            <PriCheckmark class="list-icon"></PriCheckmark>
            <span>
              Firemní večírky (vánoční, oslava dokončení projektu atd.)
            </span>
          </li>
          <li class="list-item">
            <PriBagCheckOutline class="list-icon"></PriBagCheckOutline>
            <span>
              Cena od <strong>2500</strong> Kč/hod
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
