import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home'
import Layoute from './pages/layoute'
import Reduxtoolkit from './pages/reduxtoolkit'
import Zustand from './pages/zustand'
import Info from './pages/info'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layoute />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/reduxtoolkit',
        element: <Reduxtoolkit />
      },
      {
        path: '/zustand',
        element: <Zustand />
      },
      {
        path: "/info/:id",
        element: <Info />
      }
    ]
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App