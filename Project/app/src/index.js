import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Categories } from "./Pages/Categories";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ErrorPage } from "./Pages/ErrorPage";
import { TEST } from "./components/TEST";
import { MainPage } from "./Pages/MainPage";
import { AllProducts } from "./Pages/AllProducts";
import { Product } from "./components/Product";
import { Basket } from "./components/Basket";
import { SalesPage } from "./Pages/SalesPage";
import { PropductsByCategory } from "./components/PropductsByCategory";
import { SingleProductPage } from "./Pages/SingleProductPage";

{
  /*errorElement:  <ErrorPage />, */
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/mainPage",
        element: <MainPage />,
      },
      {
        path: "/propducts",
        element: <AllProducts />,
      },
      {
        path: "/sales",
        element: <SalesPage />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/basket",
        element: <Basket />,
      },
      {
        path: "/products/:id",
        element: <SingleProductPage />,
      },
      {
        path: "/categories/:id",
        element: <PropductsByCategory />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
);
