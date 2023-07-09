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
        path: "/categories",
        element: <Categories/>
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

