import styled from "styled-components";

export const CategoriesNav = styled.nav`
  align-items: center;
  display: flex;
  height: 30px;
  justify-content: center;
  margin: 10px 0;
`;

export const CategoryItem = styled.a`
  color: ${({ theme }) => theme.COLORS.GRAY_500};
  cursor: pointer;
  font-size: 1.25rem;
  margin-right: 50px;
  padding: 5px;

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BLACK};
  }
`;
