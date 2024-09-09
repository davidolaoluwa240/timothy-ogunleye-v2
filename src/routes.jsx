// Modules
import { createBrowserRouter } from "react-router-dom";

// Pages
import { Home } from "./pages";

// Routes
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
