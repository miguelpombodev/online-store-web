import * as S from "./styles";
import {
  ShoppingBagOpen,
  User,
  Repeat,
  Cardholder,
  SignOut,
} from "@phosphor-icons/react";

export function UserProfileOptions() {
  return (
    <S.Container>
      <S.UserOptionsColumn>
        <S.UserOptionsItems>
          <ShoppingBagOpen size={20} />
          <S.UserOptionsItemTitle>Orders</S.UserOptionsItemTitle>
        </S.UserOptionsItems>
        <S.UserOptionsItems>
          <User size={20} />
          <S.UserOptionsItemTitle>Profile</S.UserOptionsItemTitle>
        </S.UserOptionsItems>
        <S.UserOptionsItems>
          <Repeat size={20} />
          <S.UserOptionsItemTitle>Exchanges</S.UserOptionsItemTitle>
        </S.UserOptionsItems>
        <S.UserOptionsItems>
          <Cardholder size={20} />
          <S.UserOptionsItemTitle>Stored Cards</S.UserOptionsItemTitle>
        </S.UserOptionsItems>
        <S.UserOptionsItems>
          <SignOut size={20} />
          <S.UserOptionsItemTitle>Logout</S.UserOptionsItemTitle>
        </S.UserOptionsItems>
      </S.UserOptionsColumn>
      <S.UserOptionContentContainer>
        <S.UserOptionContentTitle>Your Informations</S.UserOptionContentTitle>
        <S.UserOptionContent>
          <span>adkopadoa</span>
        </S.UserOptionContent>
      </S.UserOptionContentContainer>
    </S.Container>
  );
}
