import { Navigate } from "react-router-dom";
import { LocalStorage } from "utils/LocalStorage";

type ProtectedRouteProps = {
  children: JSX.Element;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  if (!LocalStorage.jwt) {
    return <Navigate to="/login" replace />;
  }

  return children;
};