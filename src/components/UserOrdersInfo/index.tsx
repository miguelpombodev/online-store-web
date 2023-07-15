import { Container, UserContainerIcon, UserNameGreeting } from "./styles";
import {
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineDown,
} from "react-icons/ai";

export function UserOrdersInfo() {
  return (
    <Container>
      <UserContainerIcon>
        <AiOutlineUser size={25} />
        <UserNameGreeting>Hello Teste</UserNameGreeting>
        <AiOutlineDown size={13} />
      </UserContainerIcon>
      <AiOutlineShoppingCart size={25} />
      <AiOutlineHeart size={25} />
    </Container>
  );
}
