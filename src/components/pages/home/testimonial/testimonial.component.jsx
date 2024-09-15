// Components
import { Divider } from "@nextui-org/react";
import { TestimonialList } from "../../";

// Data
import { TESTIMONIALS_ITEMS as testimonialsItems } from "../../../../data";

export const Testimonial = () => {
  return (
    <section className="bg-secondary" id="testimonials">
      <div className="max-w-[1100px] py-28 mx-auto flex flex-col gap-16">
        <div className="flex flex-col items-center max-w-[450px] mx-auto text-center">
          <h2 className="font-bold text-4xl mb-6 font-inter">Testimonials</h2>
          <Divider className="bg-white w-[120px] mb-4" />
          <p className="text-white/80 italic">
            What people are saying about my work
          </p>
        </div>

        <TestimonialList items={testimonialsItems} />
      </div>
    </section>
  );
};
