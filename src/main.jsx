// Modules
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Router
import { router } from "./routes";

// Components
import { RouterProvider } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";

// Styles
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </StrictMode>
);
