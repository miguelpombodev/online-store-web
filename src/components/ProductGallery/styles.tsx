import styled from "styled-components";

export const Container = styled.div`
  margin-top: 20px;
  padding: 0 10px;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-size: 2.25rem;
  font-weight: 700;

  padding: 30px;
`;
