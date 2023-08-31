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
import GreetingContext from "./GreetingContext.js";

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

//Data to be passed globally to all the pages
const greetting = "Hey! dear,";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/** Pass the message to all the route pages */}
    <GreetingContext.Provider value={greetting} >
      <RouterProvider router={router} />
    </GreetingContext.Provider>
  </React.StrictMode>
);
