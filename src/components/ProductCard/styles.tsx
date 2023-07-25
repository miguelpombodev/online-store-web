import styled from "styled-components";

export const Container = styled.div`
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  min-height: 380px;
  width: 250px;
`;

export const ProductImage = styled.img`
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`;

export const ProductInfoContainer = styled.div`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-top: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Price = styled.p`
  color: ${({ theme }) => theme.COLORS.DEFAULT_ORANGE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.TEKO_REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-weight: 700;
`;

export const ProductName = styled.p`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-family: ${({ theme }) => theme.FONT_FAMILY.TEKO_REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  margin-top: 10px;
`;

export const ProductCategory = styled.p`
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  font-family: ${({ theme }) => theme.FONT_FAMILY.TEKO_REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  margin-top: 10px;
`;
