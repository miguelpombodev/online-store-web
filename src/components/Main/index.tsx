import { ReactNode } from "react";
import * as S from "./styles";

interface IMainProps {
  children: ReactNode;
  style?: React.CSSProperties;
}

export function Main({ children, style }: IMainProps) {
  return <S.Container style={style}>{children}</S.Container>;
}
