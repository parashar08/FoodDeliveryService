import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/shared/Layout"
import Home from "./pages/Home";
import Signup from "./components/auth/Signup"
import Login from "./components/auth/Login"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "signup",
          element: <Signup />
        },
        {
          path: "login",
          element: <Login />
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App;