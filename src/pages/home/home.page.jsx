// Components
import { Fragment } from "react";
import {
  Hero,
  About,
  Services,
  Portfolio,
  Testimonial,
  Gallery,
  Contact,
  Footer,
} from "../../components";

export const Home = () => {
  return (
    <Fragment>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonial />
      <Gallery />
      <Contact />
      <Footer />
    </Fragment>
  );
};
