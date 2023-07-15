import { ProductCategories } from "../ProductCategories";
import { SearchInput } from "../SearchInput";
import { UserOrdersInfo } from "../UserOrdersInfo";
import {
  CategoriesContainer,
  Container,
  MainContentContainer,
  Title,
} from "./styles";

export function Header() {
  return (
    <Container>
      <MainContentContainer>
        <Title>LitShade🔥</Title>
        <SearchInput />
        <UserOrdersInfo />
      </MainContentContainer>
      <CategoriesContainer>
        <ProductCategories />
      </CategoriesContainer>
    </Container>
  );
}
