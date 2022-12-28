import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../Home/Home";
import Explore from './../Shared/LeftNavInner/Explore';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Main></Main>,
      
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/explore',
          element: <Explore/>
        },
      ]
    }
  ]
)