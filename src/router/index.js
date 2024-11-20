import * as React from "react";
import { useRoutes } from "react-router-dom";
import Layout from "../layout/index"
import About from "../About/about";
import Home from "../view/Home/home";
import Login from "../Login/login";
import Four from "../view/four/four";
import ParentChild from "../view/parentChild/parentChild";
import Threepage from '../view/three/Threepage';

function RotersList() {
  let element = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "parentChild", element: <ParentChild /> },
        { path: "four", element: <Four /> },
        { path: "three", element: <Threepage /> },
        { path: "about", element: <About /> },
        { path: "home", element: <Home /> },
        { path: "/", element: <Home /> },
      ],
    },
    // { path: "/", element: <Login /> },
    { path: "/login", element: <Login /> },
    // { path: "four", element: <Four /> },
    // { path: "three", element: <Threepage /> },
    // { path: "about", element: <About /> },
    // { path: "home", element: <Home /> },
    // { path: "/", element: <Home /> },
  ])
  return element;
}
export default RotersList