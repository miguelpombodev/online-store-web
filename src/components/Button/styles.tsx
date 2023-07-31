import styled from "styled-components";

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.DEFAULT_ORANGE};
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 18px;
  padding: 5px 0;
  border-radius: 8px;
  border: none;
`;
