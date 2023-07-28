import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function UserProfile() {
  const { authenticated } = useAuth();
  console.log("UserProfile - ", authenticated);

  if (!authenticated) {
    console.log("validate");

    return <Navigate to="/login" />;
  }

  return <h1>UserProfile</h1>;
}
