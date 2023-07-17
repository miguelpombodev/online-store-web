import * as S from "./styles";

export function ProductCard() {
  return (
    <S.Container>
      <S.ProductImage src="https://static.netshoes.com.br/produtos/tenis-adidas-runfalcon-20-masculino/43/NQQ-6923-543/NQQ-6923-543_zoom4.jpg?ts=1616143211&" />
      <S.ProductInfoContainer>
        <S.Price>R$239,00</S.Price>
        <S.ProductName>
          Tênis Adidas Runfalcon 2.0 Masculino - Azul Royal+Branco
        </S.ProductName>
        <S.ProductCategory>Tênis Masculino</S.ProductCategory>
      </S.ProductInfoContainer>
    </S.Container>
  );
}
