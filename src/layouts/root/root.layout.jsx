// Components
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../../components";

export const RootLayout = () => {
  return (
    <Fragment>
      <Navbar />
      <Outlet />
    </Fragment>
  );
};
