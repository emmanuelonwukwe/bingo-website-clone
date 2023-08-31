import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error404 from "./pages/Error404.jsx";
import MainLayout from "./Layouts/MainLayout.jsx";
import Home from "./pages/Home";
import About from "./pages/About";
import Explore from "./pages/Explore";
import Login from "./pages/Login";
import Services from "./pages/Services";
import "./index.css";
import { Contact, loadContacts } from "./pages/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/explore",
        element: <Explore />
      },
      {
        path: "/services",
        element: <Services />
      },
      {
        path: "/contact/:username?",
        element: <Contact />,
        loader: loadContacts
      }
    ]
  },
  {
    path: "/login",
    element: <Login />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
