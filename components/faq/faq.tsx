import FaqColumn from "@@/faq/faq-column.tsx";

export type FaqType = {
  question: string;
  answer: string;
  column?: number;
  index?: number;
};

export type FaqProps = {
  faqs: FaqType[];
  column: number;
};

export default function Faq(props: FaqProps) {
  return (
    <section class="section-faq" id="faq">
      <div class="container">
        <h2 class="faq-heading">Časté dotazy</h2>
        <div class="faqs" id="accordionFaqs">
          {Array.from({ length: props.column }).map((_item, index) => (
            <FaqColumn {...props} column={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
