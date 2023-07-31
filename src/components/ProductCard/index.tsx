import { Product } from "../../models/Products/product.interface";
import currencyFormatter from "../../utils/currencyFormatter";
import * as S from "./styles";
interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <S.Container>
      <S.ProductImage src={product.colors[0].productColorURL} />
      <S.ProductInfoContainer>
        <S.Price>{currencyFormatter(product.value)}</S.Price>
        <S.ProductName>{product.name}</S.ProductName>
        <S.ProductCategory>Tênis Masculino</S.ProductCategory>
      </S.ProductInfoContainer>
    </S.Container>
  );
}
