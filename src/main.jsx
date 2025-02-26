import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Other from "./pages/other.jsx";
import theme from "./theme.js";
import PProjects from "./pages/personalProjects.jsx";
import Professional from "./pages/professional.jsx";
import Services from "./pages/services.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Other />,
  },
  {
    path: "/personal-portfolio",
    element: <PProjects />,
  },
  {
    path: "/professional",
    element: <Professional />,
  },
  {
    path: "/services",
    element: <Services />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
