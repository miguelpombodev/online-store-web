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
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.DEFAULT_ORANGE};
  border-radius: 100%;
  border: none;
  color: ${({ theme }) => theme.COLORS.WHITE};
  cursor: pointer;
  display: flex;
  height: 50px;
  justify-content: center;
  width: 50px;
  z-index: 1;
`;
