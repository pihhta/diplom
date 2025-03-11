import React from 'react';
import ReactDOM from "react-dom/client";
import App from "./app";
import Dashboard from "./dashboard";
import About from "./about";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {path:"/", element:<App/>},
  {path:"/dashboard", element:<Dashboard/>},
  {path:"/about", element:<About/>},
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
 
  <RouterProvider router={router}/>

  </React.StrictMode>,
);
