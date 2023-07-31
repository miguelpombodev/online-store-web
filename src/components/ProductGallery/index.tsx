import { useState } from "react";
import * as S from "./styles";
import { SwiperOptions } from "swiper/types";
import { Carousel } from "../Carousel";
import { SwiperSlide } from "swiper/react";
import { ProductCard } from "../ProductCard";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { Product } from "../../models/Products/product.interface";

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

interface ProductGalleryProps {
  products: Array<Product>;
}

export function ProductGallery({ products }: ProductGalleryProps) {
  return (
    <S.Container>
      <S.Title>You might like'em</S.Title>
      <Carousel config={carouselProductsConfig}>
        {products.map((prod) => (
          <SwiperSlide key={prod.id}>
            <ProductCard product={prod} />
          </SwiperSlide>
        ))}
      </Carousel>
    </S.Container>
  );
}
