import { SearchInput } from "../SearchInput";
import { UserOrdersInfo } from "../UserOrdersInfo";
import { Container, Title } from "./styles";

export function Header() {
  return (
    <Container>
      <Title>LitShade🔥</Title>
      <SearchInput />
      <UserOrdersInfo />
    </Container>
  );
}
