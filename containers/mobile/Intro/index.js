import * as S from "./styles";

export default function Comp({ show }) {
  return (
    <S.Container show={show}>
      <S.LogoContainer>
        <img src="/assets/images/logo.svg" alt="logo" />
      </S.LogoContainer>
    </S.Container>
  );
}
