import { LoginForm } from "../components/LoginForm";
import { Main } from "../components/Main";

export function Login() {
  return (
    <Main
      style={{
        padding: 0,
      }}
    >
      <LoginForm />
    </Main>
  );
}
