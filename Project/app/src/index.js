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

     {/*errorElement:  <ErrorPage />, */} 
const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,

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
        element: <div>Распродажи тут</div>
  
      },
      {
        path: "/shoppingBag",
        element:  <div>Корзина  </div>
  
      }, 
      {
        path: '/error',
        element: <ErrorPage />
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

