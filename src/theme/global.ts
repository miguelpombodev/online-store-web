import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Teko', sans-serif
  }

  main {
    padding: 40px 0;
    background-color: #E1E1E6;
  }

  .swiper-button-next {
  position: absolute;
  top: 40%;
  right: 0%;
}

.swiper-button-prev {
  position: absolute;
  top: 40%;
}
`;
