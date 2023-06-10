import * as S from "./styles";

import { useState, useEffect, Suspense } from "react";

export default function Comp() {
  return (
    <S.Container>
      <S.LogoContainer>
        <img src="/assets/images/logo-small.svg" alt="logo" />
      </S.LogoContainer>
    </S.Container>
  );
}
