import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Login } from 'pages/Login';
import { ProtectedRoute } from "./ProtectedRoute";

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
      element: (
        <ProtectedRoute>
          <p>Dashboard</p>
        </ProtectedRoute>
      ),
    },
    {
      path: "*",
      element: (<p>Not Found</p>),
    },
  ]);

  return <RouterProvider router={router} />
}
