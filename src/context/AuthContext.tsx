import { ReactNode, createContext, useState } from "react";
import { IAuthContext } from "../Models/Context/AuthContext/IAuthContext.interface";
import { IHandleLoginProps } from "../Models/Context/AuthContext/IHandleLoginProps.interface";
import { api } from "../lib/axios";
import { ILoginProps } from "../Models/Context/AuthContext/ILoginProps.interface";
import { useContext } from "react";

type IAuthProviderProps = {
  children?: ReactNode;
};
export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export function AuthProvider({ children }: IAuthProviderProps) {
  const [authenticated, setAuthenticated] = useState(false);

  async function handleLogin({ email, password }: IHandleLoginProps) {
    try {
      const { data } = await api.post<ILoginProps>("/account/login", {
        email,
        password,
      });

      setAuthenticated(true);
      console.log("AuthContext", authenticated);

      sessionStorage.setItem("LitShade:user", JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        authenticated,
        handleLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
