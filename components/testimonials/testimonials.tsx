import TestimonialColumn from "@@/testimonials/testimonial-column.tsx";

export type TestimonialType = {
  text: string;
  name: string;
  role: string;
  avatar: string;
  column?: number;
};

export type TestimonialProps = {
  testimonials: TestimonialType[];
  column: number;
};

export default function Testimonials(props: TestimonialProps) {
  return (
    <section class="section-testimonials" id="reference">
      <div class="container">
        <h2 class="heading-2">Reference</h2>
        <div class="testimonials">
          {Array.from({ length: props.column }).map((_item, index) => (
            <TestimonialColumn {...props} column={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
