import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider,} from "react-router-dom";

import Home from './components/Home';
import Login from './components/Login';
import Photo from './components/Photo';


const router = createBrowserRouter([
  {
    path:  '/',
    element: <Home />
  },
  {
    path:  '/photo',
    element: <Photo />
  },
  {
    path:  '/login',
    element: <Login />
  },

]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
