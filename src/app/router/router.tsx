import About from "pages/about";
import Main from "pages/main/main";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  { path: "/", element: <Main /> },
  { path: "/about", element: <About /> },
  
]);
