import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

//comprobar si el usuario existe
export function ProtectedRoute({ children }) {
  const { user, Loading } = useAuth();

  if (Loading) return <h1>Loading...</h1>;
    
  if (!user) return <Navigate to="/login" />;
  
  return <>{children}</>;
}
