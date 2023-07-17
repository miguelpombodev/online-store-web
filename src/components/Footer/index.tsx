import { useState } from "react";
import * as S from "./styles";

interface ItemsChildren {
  title: string;
  URL: string;
}

interface FooterItemsDTO {
  Institucional: ItemsChildren[];
  Social: ItemsChildren[];
  Help: ItemsChildren[];
}

export function Footer() {
  const [items, setItems] = useState<FooterItemsDTO>({
    Institucional: [
      {
        title: "About Us",
        URL: "",
      },
      {
        title: "Blog",
        URL: "",
      },
      {
        title: "Work With Us",
        URL: "",
      },
      {
        title: "Customer Service",
        URL: "",
      },
      {
        title: "Q&A",
        URL: "",
      },
    ],
    Help: [
      {
        title: "My Account",
        URL: "",
      },
      {
        title: "My Orders",
        URL: "",
      },
      {
        title: "Shippings",
        URL: "",
      },
      {
        title: "Payments",
        URL: "",
      },
    ],
    Social: [
      {
        title: "Instagram",
        URL: "",
      },
      {
        title: "Twitter",
        URL: "",
      },
      {
        title: "Facebook",
        URL: "",
      },
    ],
  });

  return (
    <S.Container>
      <S.FooterOptions>
        <S.FooterItemsContainer>
          <S.FooterItemsTitle>Institucional</S.FooterItemsTitle>
          {items.Institucional.map((instItems) => (
            <S.FooterItems>{instItems.title}</S.FooterItems>
          ))}
        </S.FooterItemsContainer>
        <S.FooterItemsContainer>
          <S.FooterItemsTitle>Help</S.FooterItemsTitle>
          {items.Help.map((helpItems) => (
            <S.FooterItems>{helpItems.title}</S.FooterItems>
          ))}
        </S.FooterItemsContainer>
        <S.FooterItemsContainer>
          <S.FooterItemsTitle>Social</S.FooterItemsTitle>
          {items.Social.map((socialItems) => (
            <S.FooterItems>{socialItems.title}</S.FooterItems>
          ))}
        </S.FooterItemsContainer>
      </S.FooterOptions>
      <S.PaymentsOptions>
        <S.PaymentsImage src="//img.ltwebstatic.com/images2_pi/2018/06/06/15282732803587566708.png" />
        <S.PaymentsImage src="//img.ltwebstatic.com/images2_pi/2018/06/06/15282732983375743706.png" />
        <S.PaymentsImage src="//img.ltwebstatic.com/images2_pi/2018/06/06/15282731342688549608.png" />
        <S.PaymentsImage src="//img.ltwebstatic.com/images2_pi/2018/06/06/1528273036537082707.png" />
        <S.PaymentsImage src="//img.ltwebstatic.com/images2_pi/2018/11/14/1542165929465511500.png" />
        <S.PaymentsImage src="//img.ltwebstatic.com/images2_pi/2018/11/14/15421659553667383771.png" />
        <S.PaymentsImage src="//img.ltwebstatic.com/images2_pi/2018/08/15/1534311470399498284.png" />
        <S.PaymentsImage src="//img.ltwebstatic.com/images3_pi/2021/08/10/16285753252c1e710a326167c3218f7485c76887a8.png" />
        <S.PaymentsImage src="//img.ltwebstatic.com/images2_pi/2018/08/31/15356946304173589516.png" />
      </S.PaymentsOptions>
    </S.Container>
  );
}
