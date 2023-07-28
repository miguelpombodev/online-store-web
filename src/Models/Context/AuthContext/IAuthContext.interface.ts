import { IHandleLoginProps } from "./IHandleLoginProps.interface";

export interface IAuthContext {
  authenticated: boolean;
  // user: object | null;
  handleLogin: ({ email, password }: IHandleLoginProps) => Promise<void>;
}
