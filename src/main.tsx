import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as bootstrap from "bootstrap";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./errorPage.tsx";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import SignIn from "./routes/signIn.tsx";
import SignUp from "./routes/signUp.tsx";
import Profile from "./routes/profile.tsx";
import ProductList from "./routes/productsList.tsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/products",
          element: <ProductList />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "sign-in",
          element: <SignIn />,
        },
        {
          path: "sign-up",
          element: <SignUp />,
        },
      ],
    },
  ],
  { basename: "/flower-and-plant-shop" }
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
