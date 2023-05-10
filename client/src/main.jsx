import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage, ErrorPage, LostPage, HttpCodePage } from './Pages';
import 'normalize.css';
import './index.css';

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/lost', element: <LostPage /> },
  { path: '/http-code/:statusCode', element: <HttpCodePage /> },
  { path: '*', element: <ErrorPage /> }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
