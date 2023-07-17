import { useState } from "react";
import { Carousel } from "../components/Carousel";
import { SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { SwiperOptions } from "swiper/types";
import { ProductGallery } from "../components/ProductGallery";

const carouselBannersConfig: SwiperOptions = {
  slidesPerView: 1,
  autoplay: {
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  loop: true,
  speed: 1000,
  modules: [Autoplay],
};

export function Home() {
  const [items, setItems] = useState([
    {
      url: "https://static.netshoes.com.br/bnn/l_netshoes/2023-06-30/9940_2006_NS_PROMO_1920X504_CAMPANHA_EXCLUSIVA.gif",
    },
    {
      url: "https://static.netshoes.com.br/bnn/l_netshoes/2023-07-13/4031_full_desk.jpg",
    },
  ]);

  return (
    <main>
      <Carousel config={carouselBannersConfig}>
        {items.map((item) => (
          <SwiperSlide>
            <img src={item.url} />
          </SwiperSlide>
        ))}
      </Carousel>
      <ProductGallery />
    </main>
  );
}
