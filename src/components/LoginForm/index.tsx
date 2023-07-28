/* eslint-disable @typescript-eslint/no-misused-promises */
import * as S from "./styles";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { IHandleLoginProps } from "../../Models/Context/AuthContext/IHandleLoginProps.interface";
import { useNavigate } from "react-router-dom";

export function LoginForm() {
  const { register, handleSubmit, watch } = useForm<IHandleLoginProps>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { handleLogin } = useAuth();
  const navigate = useNavigate();

  const handleOnSubmit = async ({ email, password }: IHandleLoginProps) => {
    console.log("chamou");

    await handleLogin({ email, password });
    navigate(-1);
  };

  watch((data) => {
    console.log(data);
  });

  return (
    <S.Container>
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <S.FormInputLabel htmlFor="email">Email</S.FormInputLabel>
        <S.FormInput
          id="email"
          type="text"
          placeholder="Email"
          {...register("email")}
        />
        <S.FormInputLabel htmlFor="password">Password</S.FormInputLabel>
        <S.FormInput
          id="password"
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        <S.FormSubmitButton
          // disabled={isSubmitDisabled}
          type="submit"
        >
          Log In!
        </S.FormSubmitButton>
      </form>
    </S.Container>
  );
}
