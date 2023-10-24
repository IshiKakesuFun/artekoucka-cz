import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(0);
  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <img
          class="my-6"
          src="/logo.svg"
          width="128"
          height="128"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <h1 class="text-4xl font-bold">Artekoučka.cz</h1>
        <h2 class="text-2xl font-bold">Jsem profesionální koučka, která je přesvědčena, že barvy odemykají potenciál.</h2>
        <p class="my-4">
          V inspirativním ateliéru ve Vochově u Plzně umožňuji jednotlivcům i týmům přicházet 
          na zcela nečekané způsoby, jak dosahovat svých cílů nejen v osobní, ale i profesní sféře.
        </p>
        <Counter count={count} />
      </div>
    </div>
  );
}
