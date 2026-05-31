import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

function PrivateRoute({ children }) {
  const { token } = useAuthContext();

  return token ? children : <Navigate to="/login" />;
}

export default PrivateRoute;