import { ReactNode } from "react";
import { Swiper, useSwiper } from "swiper/react";
import { SwiperOptions } from "swiper/types";
import * as S from "./style";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import "swiper/css";

interface CarouselProps {
  children: ReactNode;
  config: SwiperOptions;
}

export function Carousel({ children, config }: CarouselProps) {
  const swiper = useSwiper();

  return (
    <S.Container>
      <Swiper {...config}>
        {children}
        {config.navigation && (
          <S.SwiperNavButtons>
            <S.SwiperButton
              className="swiper-button-prev"
              onClick={() => swiper.slidePrev()}
            >
              <FiArrowLeft />
            </S.SwiperButton>
            <S.SwiperButton
              className="swiper-button-next"
              onClick={() => swiper.slideNext()}
            >
              <FiArrowRight />
            </S.SwiperButton>
          </S.SwiperNavButtons>
        )}
      </Swiper>
    </S.Container>
  );
}
