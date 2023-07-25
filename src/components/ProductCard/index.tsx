import { Product } from "../../Models/Products/product.interface";
import * as S from "./styles";
interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <S.Container>
      <S.ProductImage src={product.colors[0].productColorURL} />
      <S.ProductInfoContainer>
        <S.Price>{product.value}</S.Price>
        <S.ProductName>{product.name}</S.ProductName>
        <S.ProductCategory>Tênis Masculino</S.ProductCategory>
      </S.ProductInfoContainer>
    </S.Container>
  );
}
