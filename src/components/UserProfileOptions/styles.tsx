import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const UserOptionsColumn = styled.section`
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const UserOptionsItems = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};

  &:last-child {
    border: none;
  }
`;

export const UserOptionsItemTitle = styled.h3`
  color: ${({ theme }) => theme.COLORS.DEFAULT_ORANGE};
  padding: 6px;
  font-size: 21px;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const UserOptionContentContainer = styled.div`
  width: 70%;
  padding: 0 20px;
`;

export const UserOptionContentTitle = styled.h2`
  color: ${({ theme }) => theme.COLORS.BLACK};
`;

export const UserOptionContent = styled.div`
  min-height: 400px;
`;
