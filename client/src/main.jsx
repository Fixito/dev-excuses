import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage, ErrorPage, LostPage, HttpCodePage } from './Pages';
import { ToastContainer } from 'react-toastify';
import 'normalize.css';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/lost', element: <LostPage /> },
  { path: '/:httpCode', element: <HttpCodePage /> },
  { path: '*', element: <ErrorPage /> }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer
      position='top-center'
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme='light'
    />
    <RouterProvider router={router} />
  </React.StrictMode>
);
