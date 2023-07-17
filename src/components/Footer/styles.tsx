import styled from "styled-components";

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
`;

export const FooterOptions = styled.section`
  align-items: start;
  display: flex;
  justify-content: space-evenly;
`;

export const FooterItemsContainer = styled.ul`
  list-style: none;
`;

export const FooterItemsTitle = styled.h2``;

export const FooterItems = styled.p`
  font-size: 1.15rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const PaymentsOptions = styled.section`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const PaymentsImage = styled.img`
  height: 35px;
  margin-right: 20px;
  width: 50px;
`;
