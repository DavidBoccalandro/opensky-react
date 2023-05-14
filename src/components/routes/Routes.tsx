import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Login } from 'pages/Login';

export const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (<Login />),
    },
    {
      path: "/login",
      element: (<Login />),
    },
    {
      path: "/dashboard",
      element: (<p>Dashboard</p>),
    },
    {
      path: "*",
      element: (<p>Not Found</p>),
    },
  ]);

  return <RouterProvider router={router} />
}