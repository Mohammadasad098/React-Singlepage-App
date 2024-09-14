import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
              path: '/',
              element: <Home/>
            },
            {
                path: 'about',
                element: <About/>
            },
              {
                path: 'contact',
                element: <Contact/>
              },
              {
                path: 'product',
                element: <Product/>
              },
              {
                path: '*',
                element: <Home/>
              }
        ]
    }
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
  )