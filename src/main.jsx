import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './Pages/login.jsx'  
import RegisterPage from './Pages/register'
import ErrorPage from './Pages/error'
import { Link } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:"/",
    element: <div>Hello World
      <Link to="/login" className="text-blue-600 font-bold" > Sign In </Link>  
    </div>,
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
  
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router} />
  </StrictMode>,
)
