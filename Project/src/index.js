import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Categories } from "./Pages/CategoriesPage";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ErrorPage } from "./Pages/ErrorPage";
import { MainPage } from "./Pages/MainPage";
import { AllProducts } from "./Pages/AllProductsPage";
import { Basket } from "./Pages/BasketPage";
import { SalesPage } from "./Pages/SalesPage";
import { PropductsByCategory } from "./Pages/PropductsByCategoryPage";
import { SingleProductPage } from "./Pages/SingleProductPage";
import { ProductsByName } from "./Pages/ProductsByNamePage";

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
