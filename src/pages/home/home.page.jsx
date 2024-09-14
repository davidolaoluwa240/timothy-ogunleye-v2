// Components
import { Fragment } from "react";
import { Hero, About, Services } from "../../components";

export const Home = () => {
  return (
    <Fragment>
      <Hero />
      <About />
      <Services />
    </Fragment>
  );
};
