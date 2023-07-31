import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { UserProfileOptions } from "../components/UserProfileOptions";
import { Main } from "../components/Main";

export function UserProfile() {
  const { authenticated } = useAuth();

  if (!authenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <Main>
      <UserProfileOptions />
    </Main>
  );
}
