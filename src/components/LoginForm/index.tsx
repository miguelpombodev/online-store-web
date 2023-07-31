/* eslint-disable @typescript-eslint/no-misused-promises */
import * as S from "./styles";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { IHandleLoginProps } from "../../models/Context/AuthContext/IHandleLoginProps.interface";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";

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
    await handleLogin({ email, password });
    navigate(-1);
  };

  // watch((data) => {
  //   console.log(data);
  // });

  return (
    <S.Container>
      <S.FormImageContainer>
        <S.FormSideImage src="https://images.unsplash.com/photo-1615248829796-27e56ffb55b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80" />
      </S.FormImageContainer>
      <S.FormContainer>
        <S.FormLogin onSubmit={handleSubmit(handleOnSubmit)}>
          <S.FormTitle>Login in Now!</S.FormTitle>
          <S.FormInputsContainer>
            <S.FormInputLabelsContainer>
              <S.FormInputLabel htmlFor="email">Email</S.FormInputLabel>
              <S.FormInput
                id="email"
                type="text"
                placeholder="Email"
                {...register("email")}
              />
            </S.FormInputLabelsContainer>
            <S.FormInputLabelsContainer>
              <S.FormInputLabel htmlFor="password">Password</S.FormInputLabel>
              <S.FormInput
                id="password"
                type="password"
                placeholder="Password"
                {...register("password")}
              />
              <S.FormForgotPassword>Forgot Password?</S.FormForgotPassword>
            </S.FormInputLabelsContainer>
          </S.FormInputsContainer>
          <Button
            // disabled={isSubmitDisabled}
            type="submit"
          >
            Log In!
          </Button>
        </S.FormLogin>
      </S.FormContainer>
    </S.Container>
  );
}
