// ## Namaste React Course by Akshay Saini
// Chapter 05 - Let's get Hooked!

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/components/Header';
import Body from './src/components/Body';
import Footer from './src/components/Footer';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import ErrorComponent from './src/components/ErrorComponent';
import RestaurantMenu from './src/components/RestaurantMenu';
import userContext from './src/utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './src/utils/appStore';
import Cart from './src/components/Cart';

const Home = React.lazy(() => import('./src/components/Home'));
const Contact = React.lazy(() => import('./src/components/Contact'));

const AppLayout = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: 'John Deo',
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <userContext.Provider
        value={{ loggedInUser: { name: userName }, setUserName }}
      >
        <Header />
        <Outlet />
        {/* <Footer /> */}
      </userContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: (
          <React.Suspense fallback={<div>Loading...</div>}>
            <Home />
          </React.Suspense>
        ),
      },
      {
        path: '/contact',
        element: (
          <React.Suspense fallback={<div>Loading...</div>}>
            <Contact />
          </React.Suspense>
        ),
      },
      {
        path: '/restaurants/:resId',
        element: <RestaurantMenu />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
    errorElement: <ErrorComponent />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
