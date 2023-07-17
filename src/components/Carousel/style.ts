import { styled } from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  & > .swiper > .swiper-wrapper > .swiper-slide {
    display: flex;
    justify-content: center;
  }
`;

export const SwiperNavButtons = styled.div``;

export const SwiperButton = styled.button`
  cursor: pointer;
  border-radius: 100%;
  border: none;
  width: 50px;
  height: 50px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.DEFAULT_ORANGE};
  z-index: 1;
`;
