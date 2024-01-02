import FaqItem from "@@/faq/faq-item.tsx";

export type FaqType = {
  question: string;
  answer: string;
};

export type FaqProps = {
  faqs: FaqType[];
};

export default function Faq(props: FaqProps) {
  return (
    <section class="section-faq" id="faq">
      <div class="container">
        <h2 class="heading-2">Časté dotazy</h2>
      </div>
      {props.faqs?.map((item) => <FaqItem {...item} />)}
    </section>
  );
}
