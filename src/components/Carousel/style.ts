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

export const SlideImage = styled.img`
  /* width: 25vw; */
`;
