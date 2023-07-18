import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom' 
import './index.css';
import App from './App';
import { Categories } from './components/Categories';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ErrorPage } from './components/ErrorPage';
import { TEST } from './components/TEST';
import { MainPage } from './components/mainPage';
import { AllProducts } from './components/AllProducts';
import { Product } from './components/Product';
import {PropductPage} from '../src/Pages/ProductPage'
import { Basket } from './components/Basket';
import {SalesPage} from './components/SalesPage'
import { PropductsByCategory } from './components/PropductsByCategory';
import { SingleProductPage } from './components/SingleProductPage';

     {/*errorElement:  <ErrorPage />, */} 
const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
///categories
      children: [
        {
          path: "/mainPage",
          element: <MainPage/>
          
  
        },
        {
        path: "/propducts",
        element: <AllProducts/>
      },
      {
        path: "/sales",
        element: <SalesPage/>
  
      },
      {
        path: "/categories",
        element: <Categories/> 
  
      }, 
      {
        path: "/basket",
        element: <Basket/> 
  
      }, 
      {
        path: '/error',
        element: <ErrorPage />
      },
      {
        path: '/products/:id',
        element: <SingleProductPage />,
      },   
      {
        path: '/categories/:id',
        element: <PropductsByCategory/>,
      },
      ]
    },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
  </Provider>
);

