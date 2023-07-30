import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 20%;

  & > div {
    cursor: pointer;
  }

  & > svg {
    cursor: pointer;
  }
`;

export const UserContainerIcon = styled(Link)`
  display: flex;
  align-items: center;
`;

export const UserNameGreeting = styled.p`
  font-size: 1.1rem;
  margin: 0 10px;
`;
