import { styled } from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: column;

  background-color: ${(props) => props.theme.COLORS.WHITE};
`;

export const MainContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 25px 200px;
`;

export const Title = styled.h1``;

export const CategoriesContainer = styled.div``;
