import PersonalTopics, {
  defaulPersonalTopics,
} from "_/artekoucing/personal-topics.tsx";
import TeamTopics, { defaultTeamTopics } from "_/artekoucing/team-topics.tsx";

export type ArtekoucinkProps = {
  personalTopics: string[];
  teamTopics: string[];
};

export const defaultArtekoucinkProps: ArtekoucinkProps = {
  personalTopics: defaulPersonalTopics,
  teamTopics: defaultTeamTopics,
};

export default function Artekoucink(props: ArtekoucinkProps) {
  return (
    <section class="section-artekoucink" id="artekoucink">
      <div class="container">
        <h2 class="heading-2">O čem to je</h2>
        <div class="artekoucink">
          <div class="artekoucink-box">
            <h3 class="heading-3">Koučink</h3>
            <p class="artekoucink-text">
              je způsob, jak nalézt řešení v nejrůznějších tématech a oblastech,
              kde si nevíme rady či stojíme na křižovatce. Tato řešení si za
              pomoci zvídavých otázek <strong>kouče</strong> objevuje{" "}
              <strong>klient sám</strong> tak, aby respektovala jeho možnosti,
              schopnosti a byla v souladu s jeho potřebami.
            </p>
          </div>
          <div class="artekoucink-box">
            <h3 class="heading-3">Cíl koučinku</h3>
            <p class="artekoucink-text">
              <strong>si stanovuje koučovaný</strong>. Kouč mu pomáhá držet
              směr, hledat nové úhly pohledu, zdroje, podporuje ho v tvorbě
              plánů, strategií a taky koučovaného “pošťouchne” ke stanovení
              konkrétních kroků, které povedou k cíli efektivně a přímo.{" "}
              <strong>
                Není však rádcem, mentorem, který by klientovi říkal, co a jak
                má dělat
              </strong>
              . Za výsledek koučování je tak zodpovědný sám klient. Na rozdíl od
              psychoterapie, která se obrací do minulosti, je celý{" "}
              <strong>proces zaměřen na pohled do budoucna</strong>.
            </p>
          </div>
          <div class="artekoucink-box">
            <h3 class="heading-3">Artekoučink</h3>
            <p class="artekoucink-text">
              je způsob koučování, který spojuje prvky kreativního vyjadřování s
              koučovacím procesem. Kreativní prvky a metody slouží jako
              prostředek pro hlubší sebepoznání, komunikaci a nalezení
              perspektiv.
            </p>
            <p class="artekoucink-text">
              <strong>
                Předpokladem pro využití tohoto způsobu je pouze ochota to
                zkusit, nikoli předchozí výtvarné zkušenosti či řemeslná
                zručnost.
              </strong>
            </p>
            <a href="/sluzby/#atelier" class="btn btn--outline">
              Zjistit více &rarr;
            </a>
          </div>
        </div>
        <div class="artekoucink-topics" id="obvykla-temata">
          <div class="artekoucink-box">
            <h3 class="heading-3">Příklady témat, která řeší klienti</h3>
            <PersonalTopics {...props} />
          </div>
          <div class="artekoucink-box">
            <h3 class="heading-3">Příklady témat, která řeší týmy</h3>
            <TeamTopics {...props} />
          </div>
        </div>
      </div>
    </section>
  );
}
