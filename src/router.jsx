import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { Home } from "./pages/home/home";
import { Shop } from "./pages/shop/shop";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      //   errorElement: <ErrorPage />,
    },
    {
      path: "/shop",
      element: <Shop />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
