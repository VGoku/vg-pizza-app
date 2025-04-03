import React, { Suspense } from 'react'
import { 
  createBrowserRouter, 
  RouterProvider, 
  Navigate
} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Menu from './components/Menu'
import NotFound from './components/NotFound'
import LoadingSpinner from './components/LoadingSpinner'

const routes = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <Navigate to="/404" />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Home />
          </Suspense>
        )
      },
      {
        path: 'menu',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Menu />
          </Suspense>
        )
      },
      {
        path: '404',
        element: <NotFound />
      },
      {
        path: '*',
        element: <Navigate to="/404" replace />
      }
    ]
  }
]

const router = createBrowserRouter(routes)

const App: React.FC = () => {
  return <RouterProvider router={router} />
}

export default App
