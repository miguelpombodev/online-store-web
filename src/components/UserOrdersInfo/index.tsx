import { Container } from "./styles";
import {
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineHeart,
} from "react-icons/ai";

export function UserOrdersInfo() {
  return (
    <Container>
      <AiOutlineUser size={25} />
      <AiOutlineShoppingCart size={25} />
      <AiOutlineHeart size={25} />
    </Container>
  );
}
