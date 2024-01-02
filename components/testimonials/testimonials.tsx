import Testimonial from "@@/testimonials/testimonial.tsx";

export type TestimonialType = {
  text: string;
  name: string;
  role: string;
  avatar: string;
};

export type TestimonialProps = {
  testimonials: TestimonialType[];
};

export default function Testimonials(props: TestimonialProps) {
  return (
    <section class="section-testimonials" id="testimonials">
      <div class="container">
        <h2 class="heading-2">Reference</h2>
        <div class="testimonials">
          {props.testimonials?.map((item) => <Testimonial {...item} />)}
        </div>
      </div>
    </section>
  );
}
