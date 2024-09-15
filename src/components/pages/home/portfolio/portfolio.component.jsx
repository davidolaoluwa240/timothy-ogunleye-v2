// Components
import { Divider } from "@nextui-org/react";

export const Portfolio = () => {
  return (
    <section className="bg-primary" id="portfolio">
      <div className="max-w-[1100px] py-28 mx-auto flex flex-col gap-20">
        <div className="flex flex-col items-center max-w-[450px] mx-auto text-center">
          <h2 className="font-bold text-4xl mb-6 font-inter">Portfolio</h2>
          <Divider className="bg-white w-[120px] mb-4" />
          <p className="text-white/80 italic">
            A glimpse of the projects I've been working on
          </p>
        </div>
      </div>
    </section>
  );
};
