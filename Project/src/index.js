import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Categories } from "./Pages/Categories";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ErrorPage } from "./Pages/ErrorPage";
import { MainPage } from "./Pages/MainPage";
import { AllProducts } from "./Pages/AllProducts";
import { Basket } from "./Pages/Basket";
import { SalesPage } from "./Pages/SalesPage";
import { PropductsByCategory } from "./Pages/PropductsByCategory";
import { SingleProductPage } from "./Pages/SingleProductPage";
import { ProductsByName } from "./Pages/ProductsByName";

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
        path: "/products",
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
      {
        path: "/productsSearch",
        element: <ProductsByName />,
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
