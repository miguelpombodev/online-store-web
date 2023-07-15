import { styled } from "styled-components";
import { MdSearch } from "react-icons/md";

export const Container = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 4px;
  display: flex;
  justify-content: space-around;
  padding: 8px;
  width: 55%;
`;

export const Input = styled.input`
  border: none;
  border-right: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: 1rem;
  height: 30px;
  outline: none;
  width: 90%;
`;
export const Icon = styled(MdSearch)`
  height: 23px;
  width: 23px;
`;
