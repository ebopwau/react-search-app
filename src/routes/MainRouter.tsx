import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const MainPageScreen = React.lazy(() => import('screens/MainPage').then(({ View }) => ({ default: View })));
const SearchPageScreen = React.lazy(() => import('screens/SearchPage').then(({ View }) => ({ default: View })));
const ErrorPageScreen = React.lazy(() => import('screens/ErrorPage').then(({ View }) => ({ default: View })));

const router = createBrowserRouter([
  {
    path: '/',
    element: <React.Suspense fallback="/"><MainPageScreen /></React.Suspense>,
    errorElement: <React.Suspense fallback="/"><ErrorPageScreen /></React.Suspense>,
  },
  {
    path: '/search',
    element: <React.Suspense fallback="/"><SearchPageScreen /></React.Suspense>,
  },
], { basename: '/react-search-app' });

export const MainRouter = () => (<RouterProvider router={router} />);
