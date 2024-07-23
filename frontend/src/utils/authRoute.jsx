import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../context/authContext";

const AuthRoute = ({ children, redirectTo }) => {
  const { auth } = useContext(AuthContext);

  return auth?.accessToken ? (
    <Navigate to={redirectTo} />
  ) : children ? (
    children
  ) : (
    <Outlet />
  );
};

export default AuthRoute;
