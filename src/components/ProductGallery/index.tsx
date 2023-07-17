import { useState } from "react";
import * as S from "./styles";
import { SwiperOptions } from "swiper/types";
import { Carousel } from "../Carousel";
import { SwiperSlide } from "swiper/react";
import { ProductCard } from "../ProductCard";
import { A11y, Navigation, Pagination } from "swiper/modules";

const carouselProductsConfig: SwiperOptions = {
  slidesPerView: 5,
  loop: true,
  navigation: {
    enabled: true,
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  modules: [Navigation, A11y, Pagination],
};

export function ProductGallery() {
  const [products, setProducts] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 22, 22, 22, 22, 22,
  ]);

  return (
    <S.Container>
      <S.Title>You might like'em</S.Title>
      <Carousel config={carouselProductsConfig}>
        {products.map((prod) => (
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
        ))}
      </Carousel>
    </S.Container>
  );
}
