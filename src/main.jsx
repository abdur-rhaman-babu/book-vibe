import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/Root/Root'
import Books from './components/Books/Books'
import Pages from './components/Pages/Pages'
import SingIn from './components/SignIn/SingIn'
import SignUp from './components/SignUp/SignUp'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    children:[
      {
        path:'/books',
        element:<Books/>
      },
      {
        path:'/pages',
        element:<Pages/>
      },
      {
        path:'/signin',
        element:<SingIn/>
      },
      {
        path:'/signup',
        element:<SignUp/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
