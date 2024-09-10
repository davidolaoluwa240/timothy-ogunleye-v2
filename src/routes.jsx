// Modules
import { createBrowserRouter } from "react-router-dom";

// Layouts
import { RootLayout } from "./layouts";

// Pages
import { Home } from "./pages";

// Routes
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ index: true, element: <Home /> }],
  },
]);
