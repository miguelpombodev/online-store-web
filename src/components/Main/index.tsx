import { ReactNode } from "react";
import * as S from "./styles";

interface IMainProps {
  children: ReactNode;
}

export function Main({ children }: IMainProps) {
  return <S.Container>{children}</S.Container>;
}
