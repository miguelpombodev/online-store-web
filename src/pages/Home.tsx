import { useEffect, useState } from "react";
import { Carousel } from "../components/Carousel";
import { SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { SwiperOptions } from "swiper/types";
import { ProductGallery } from "../components/ProductGallery";
import { StaticBanner } from "../components/StaticBanner";
import { api } from "../lib/axios";
import { Product } from "../Models/Products/product.interface";
import { Main } from "../components/Main";

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
    {
      url: "https://static.netshoes.com.br/bnn/l_netshoes/2023-07-21/8947_elas.gif",
    },
  ]);

  const [productsGallery, setProductsGallery] = useState<Product[]>([]);

  async function loadProductsGallery() {
    const response = await api.get<Product[]>("/products", {
      params: {
        orderBy: "asc",
      },
    });
    setProductsGallery(response.data);
  }

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    loadProductsGallery();
  }, []);

  return (
    <Main>
      <Carousel config={carouselBannersConfig}>
        {items.map((item, idx) => (
          <SwiperSlide key={idx}>
            <img src={item.url} />
          </SwiperSlide>
        ))}
      </Carousel>
      <ProductGallery products={productsGallery} />
      <StaticBanner
        URI="https://static.zattini.com.br/bnn/l_zattini/2023-06-15/3231_1306x350_full2_generica_230614.gif"
        imgTitle="Outlet Banner"
      />
    </Main>
  );
}
