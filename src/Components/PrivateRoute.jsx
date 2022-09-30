import { authContext } from "../Context/AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { state } = useContext(authContext);

  if (!state.isAuth) {
    return <Navigate to="/" />;
  }
  return children;
}
