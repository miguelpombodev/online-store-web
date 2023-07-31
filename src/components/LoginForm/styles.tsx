import styled from "styled-components";

export const Container = styled.section`
  align-items: center;
  align-self: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  height: 100vh;
`;

export const FormImageContainer = styled.div`
  display: flex;
  height: 100vh;
  align-items: stretch;
`;
export const FormSideImage = styled.img``;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 40px;
  width: 60%;
  align-items: flex-start;
`;

export const FormTitle = styled.h1``;

export const FormInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-bottom: 20px;
`;
export const FormInputLabelsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;

export const FormLogin = styled.form`
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 20px;
  width: 60%;
`;

export const FormInput = styled.input`
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  border-radius: 8px;
  border: none;
  height: 30px;
  padding: 20px 7px;
  font-size: 18px;

  &:focus {
    outline-color: ${({ theme }) => theme.COLORS.DEFAULT_ORANGE};
  }
`;

export const FormInputLabel = styled.label`
  font-size: 1.25rem;
`;

export const FormForgotPassword = styled.p`
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  cursor: pointer;
  font-size: 14px;
  margin: 5px 0 0 2px;
  text-decoration: underline;
`;
