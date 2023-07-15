import { styled } from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 25px 200px;

  background-color: ${(props) => props.theme.COLORS.GRAY_100};
`;

export const Title = styled.h1``;
