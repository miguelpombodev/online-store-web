import { Link } from "react-router-dom";
import { Container, UserContainerIcon, UserNameGreeting } from "./styles";
import {
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineDown,
} from "react-icons/ai";
import { useAuth } from "../../context/AuthContext";

export function UserOrdersInfo() {
  const { authenticated } = useAuth();

  return (
    <Container>
      <UserContainerIcon>
        <Link to={authenticated ? "/profile" : "/login"}>
          <AiOutlineUser size={25} />
          <UserNameGreeting>Hello Teste</UserNameGreeting>
          <AiOutlineDown size={13} />
        </Link>
      </UserContainerIcon>
      <AiOutlineShoppingCart size={25} />
      <AiOutlineHeart size={25} />
    </Container>
  );
}
