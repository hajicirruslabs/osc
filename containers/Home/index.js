import * as S from "./styles";

import { useState, useEffect } from "react";

import Upper from "foundations/Upper";
import { useRouter } from "next/router";

const ITEMS = [
  {
    color: "hsla(21, 91%, 55%, 1)",
    text: "Pay Attention",
    osc: "15",
    icon: "/assets/icons/lists/attention.svg",
    url: "/tasks/attention",
  },
  {
    color: "hsla(137, 21%, 50%, 1)",
    text: "Breathe",
    osc: "26",
    icon: "/assets/icons/lists/breathe.svg",
    url: "/tasks/breathe",
  },
  {
    color: "hsla(10, 55%, 39%, 0.34)",
    text: "Tranfuse Blood",
    osc: "450",
    icon: "/assets/icons/lists/blood.svg",
    url: "/tasks/blood",
    disabled: true,
  },
  {
    color: "hsla(10, 55%, 39%, 0.34)",
    text: "Follicle Donation",
    osc: "213",
    icon: "/assets/icons/lists/hair.svg",
    url: "/tasks/dontaion",
    disabled: true,
  },
];

export default function Comp({ show, userName, osc }) {
  const router = useRouter();

  return (
    <S.Container show={show}>
      <Upper />
      <S.Main>
        <S.TopSection>
          <h1>Hello, {userName}!</h1>
          <h2>{`Here’s how you’re doing so far`}</h2>
        </S.TopSection>

        <S.BalanceSection>
          <S.Balance>
            <S.BalanceUpper>
              <img src="/assets/icons/orange_currency_symbol.svg" />
              {osc}
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
              <S.SingleItem key={i} onClick={() => router.push(`${item.url}?userName=${userName}&osc=${osc}`)}>
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
