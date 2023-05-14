import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Login } from 'pages/Login';
import { Dashboard } from "pages/Dashboard";
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
          <Dashboard/>
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
