import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import About from "./pages/About.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import "./i18n.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>
);
