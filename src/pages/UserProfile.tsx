import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { UserProfileOptions } from "../components/UserProfileOptions";

export function UserProfile() {
  const { authenticated } = useAuth();

  if (!authenticated) {
    return <Navigate to="/login" />;
  }

  return <UserProfileOptions />;
}
