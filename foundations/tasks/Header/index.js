import * as S from "./styles";

import { useState, useEffect } from "react";

import { FiChevronLeft } from "react-icons/fi";

export default function Comp({ handleBackClick, color, data, osc }) {
  return (
    <S.Header color={color}>
      <S.Left onClick={handleBackClick}>
        <FiChevronLeft />
      </S.Left>
      <S.Middle>
        <S.Title>
          <p>{data.name}</p>
          <p>(+{data.osc} OSC)</p>
        </S.Title>
        <S.Button color={color}>
          <img src="/assets/icons/osc_white.svg" />
          {osc}
        </S.Button>
      </S.Middle>
    </S.Header>
  );
}
