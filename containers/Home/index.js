import * as S from "./styles";

import { useState, useEffect } from "react";

import { useGLTF, OrbitControls } from "@react-three/drei";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";

export default function Comp({ show }) {
  const [inputVal, setInputVal] = useState("");

  return (
    <S.Container show={show}>
      <S.Main>
        <S.TopSection>
          <h1>Hello, Cyan!</h1>
          <h2>{`Here’s how you’re doing so far`}</h2>
        </S.TopSection>

        <S.CirlceSection>
          <S.CircleUpper>310</S.CircleUpper>
          <S.CircleLower>Your OSC balance</S.CircleLower>
        </S.CirlceSection>

        <S.ListSection>
          <h2>Give to grow your social capital</h2>
          <S.List></S.List>
        </S.ListSection>
      </S.Main>
    </S.Container>
  );
}
