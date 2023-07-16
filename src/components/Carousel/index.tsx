import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Container, SlideImage } from "./style";

import "swiper/css";

export function Carousel() {
  const [items, setItems] = useState([
    {
      url: "https://static.netshoes.com.br/bnn/l_netshoes/2023-06-30/9940_2006_NS_PROMO_1920X504_CAMPANHA_EXCLUSIVA.gif",
    },
    {
      url: "https://static.netshoes.com.br/bnn/l_netshoes/2023-07-13/4031_full_desk.jpg",
    },
  ]);

  return (
    <Container>
      <Swiper
        slidesPerView={1}
        autoplay={{
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        speed={1000}
        modules={[Autoplay]}
      >
        {items.map((item) => (
          <SwiperSlide>
            <SlideImage src={item.url} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
