import { ButtonHTMLAttributes, ReactNode } from "react";
import * as S from "./styles";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

export function Button({ children }: IButtonProps) {
  return <S.Container>{children}</S.Container>;
}
