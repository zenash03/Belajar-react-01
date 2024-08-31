import React from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home/Home';
import About from './About/About';

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  }
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
