import * as S from "./styles";

import { useState, useEffect } from "react";

import { useGLTF, OrbitControls } from "@react-three/drei";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";

const ITEMS = [
  {
    color: "hsla(21, 91%, 55%, 1)",
    text: "Pay Attention",
    osc: "15",
    icon: "/assets/icons/lists/attention.svg",
  },
  {
    color: "hsla(137, 21%, 50%, 1)",
    text: "Breathe",
    osc: "26",
    icon: "/assets/icons/lists/breathe.svg",
  },
  {
    color: "hsla(10, 55%, 39%, 0.34)",
    text: "Tranfuse Blood",
    osc: "450",
    icon: "/assets/icons/lists/blood.svg",
    disabled: true,
  },
  {
    color: "hsla(10, 55%, 39%, 0.34)",
    text: "Follicle Donation",
    osc: "213",
    icon: "/assets/icons/lists/hair.svg",
    disabled: true,
  },
];

export default function Comp({ show, userName }) {
  const [inputVal, setInputVal] = useState("");

  return (
    <S.Container show={show}>
      <S.Main>
        <S.TopSection>
          <h1>Hello, {userName}!</h1>
          <h2>{`Here’s how you’re doing so far`}</h2>
        </S.TopSection>

        <S.BalanceSection>
          <S.Balance>
            <S.BalanceUpper>
              <img src="/assets/icons/orange_currency_symbol.svg" />
              310
            </S.BalanceUpper>
            <S.BalanceLower>Your OSC balance</S.BalanceLower>
          </S.Balance>
          {/* {new Array(4).fill(0).map((_, i) => (
            <S.SurroundingCirlces key={i} idx={i + 1} />
          ))} */}
        </S.BalanceSection>

        <S.ListSection>
          <h2>Give to grow your social capital</h2>
          <S.List>
            {ITEMS.map((item, i) => (
              <S.SingleItem key={i}>
                <S.ItemLeft color={item.color}>
                  <img src={item.icon} />
                </S.ItemLeft>
                <S.ItemRight disabled={item.disabled}>
                  <S.Description color={item.color} disabled={item.disabled}>
                    <h1>{item.text}</h1>
                    <p>+{item.osc} OSC</p>
                  </S.Description>
                  <S.Button color={item.color}>
                    <img src={"/assets/icons/lists/plus.svg"} />
                  </S.Button>
                </S.ItemRight>
              </S.SingleItem>
            ))}
          </S.List>
        </S.ListSection>
      </S.Main>
    </S.Container>
  );
}
