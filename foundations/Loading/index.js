import { useState, useEffect } from "react";
import * as S from "./styles";

export default function Container({ loading }) {
  return (
    <S.LoadingContainer loading={loading}>
      <h1>Loading...</h1>
      <S.LoadingImage>
        <img src="/assets/screen/Company-Logo.svg" alt="logo" />
      </S.LoadingImage>
      <h2>Love is an essential labour.</h2>
    </S.LoadingContainer>
  );
}
