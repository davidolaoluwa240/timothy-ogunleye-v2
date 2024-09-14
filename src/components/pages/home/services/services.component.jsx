// Components
import { Divider } from "@nextui-org/react";
import { ServicesList } from "../../";

// Data
import { SERVICES_ITEMS as servicesItems } from "../../../../data";

export const Services = () => {
  return (
    <section className="bg-secondary" id="services">
      <div className="max-w-[1100px] py-28 mx-auto flex flex-col gap-20">
        <div className="flex flex-col items-center max-w-[450px] mx-auto text-center">
          <h2 className="font-bold text-4xl mb-6 font-inter">Services</h2>
          <Divider className="bg-white w-[120px] mb-4" />
          <p className="text-white/80 italic">
            Let me help make better use of your data. I offer consulting,
            training, and speaking engagements.
          </p>
        </div>
        <ServicesList items={servicesItems} />
      </div>
    </section>
  );
};
