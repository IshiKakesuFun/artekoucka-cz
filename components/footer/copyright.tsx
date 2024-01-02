export default function CopyRight() {
  return (
    <p class="copyright">
      Copyright {"\u00A9 "}
      <span>{new Date().getFullYear()}</span> Mgr. Marta Sojková, MBA.{" "}
      Všechna práva vyhrazena.
    </p>
  );
}
