import { use } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../AuthContexts/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user } = use(AuthContext);
  //   const location = useLocation(); state={location.state}
  if (user) {
    return children;
  }
  return <Navigate to={"/login"}></Navigate>;
};

export default PrivateRoute;
