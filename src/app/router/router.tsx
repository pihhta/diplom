import About from "pages/about";
import Dashboard from "pages/dashboard";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/about", element: <About /> },
]);
