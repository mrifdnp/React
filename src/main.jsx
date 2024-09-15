import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import LoginPage from './Pages/login.jsx'  
import RegisterPage from './Pages/register'
import ErrorPage from './Pages/error'
import ProductPage from './Pages/products.jsx'
import DetailProductPage from './Pages/detailProduct.jsx'


const router = createBrowserRouter([
  {
    path:"/",
    element: <Navigate to="/login" />,
    errorElement:<ErrorPage/>
  },

  {
    path:"/login",
    element:<LoginPage/>
  },
  {
    path:"/register",
    element:<RegisterPage/>
  },
  {
    path:"/products",
    element: <ProductPage/>
  },
  {
    path: "/product/:id",
    element: <DetailProductPage/>
  }
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router} />
  </StrictMode>,
)
