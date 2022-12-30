import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../Home/Home";
import People from "../Home/People";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";
import Explore from './../Shared/LeftNavInner/Explore';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/explore',
          element: <Explore/>
        },
        {
          path:'/profile',
          element:<People></People>
        }
      ]
    }
  ]
)