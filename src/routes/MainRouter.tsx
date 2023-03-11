import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { View as MainPage } from 'screens/MainPage';
import { View as SearchPage } from 'screens/SearchPage';
import { View as ErrorPage } from 'screens/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/search',
    element: <SearchPage />,
  },
]);

export const MainRouter = () => (<RouterProvider router={router} />);
