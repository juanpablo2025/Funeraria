import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Principal from "./Pages/Home.jsx"
import Funeraria from "./Pages/Funeraria.jsx"
import './App.css'

function App() {


  const router = createBrowserRouter([

    {
      path: '/',
      element: <Principal />
    },
    {
      path: '/Funeraria',
      element: <Funeraria />
    }

  ])


  return (


    <RouterProvider router={router} />
  )
}

export default App
