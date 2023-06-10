import * as S from "./styles";

import { useState, useEffect, Suspense } from "react";

const DATA = [
  {
    img: "",
    ranking: 3,
    name: "Alocasia",
    totalOSC: 34610,
    topContributor: "Kimberly W.",
    averageCare: 4.34,
    seadonsBloomed: 3,
    time: 437,
    totalPerformance: 35781,
  },
  {
    img: "",
    ranking: 1,
    name: "Alocasia",
    totalOSC: 87764,
    topContributor: "Wessen L.",
    averageCare: 3.09,
    seadonsBloomed: 3,
    time: 674,
    totalPerformance: 89047,
  },

  {
    img: "",
    ranking: 2,
    name: "Dendrobium",
    totalOSC: 56993,
    topContributor: "June P.",
    averageCare: 16.2,
    seadonsBloomed: 13,
    time: 132,
    totalPerformance: 58845,
  },
];

const LIST = ["Total OSC given", "Top contributor", "Average care hours/day", "Seasons bloomed", "Time in flourish (in hrs)"];

export default function Comp() {
  return (
    <S.Container>
      <S.LogoContainer>
        <img src="/assets/images/logo-small.svg" alt="logo" />
      </S.LogoContainer>

      <S.Left>
        <S.LeftUpper>
          <img src="/assets/screen/Company-Logo.svg" alt="logo" />
          <p>Northeastern Urban Temperates</p>
        </S.LeftUpper>
        <S.LeftList>
          {LIST.map((item, index) => (
            <S.LeftListItem>{item}</S.LeftListItem>
          ))}
          <S.LeftListBottom>Total Performance</S.LeftListBottom>
        </S.LeftList>
      </S.Left>
      <S.Right>
        <h1>Local Flourishing Statistics</h1>
        <S.Plants>
          {DATA.map((datum, i) => (
            <S.SinglePlant key={i}>
              <img src={datum.img} alt="plant" />
              <S.Ranking>
                <img src={`/assets/screen/Ribbon-${datum.ranking}.svg`} alt="ranking" />
              </S.Ranking>
            </S.SinglePlant>
          ))}
        </S.Plants>
        <S.List>
          {DATA.map((datum, i) => (
            <S.SingleColumn key={i}>
              <S.Title>
                <h1>{datum.name}</h1>
                <p>Current Status</p>
              </S.Title>
              <S.SingleEl>{datum.totalOSC}</S.SingleEl>
              <S.SingleEl>{datum.topContributor}</S.SingleEl>
              <S.SingleEl>{datum.averageCare}</S.SingleEl>
              <S.SingleEl>{datum.seadonsBloomed}</S.SingleEl>
              <S.SingleEl>{datum.time}</S.SingleEl>
              <S.FinalEl>{datum.totalPerformance}</S.FinalEl>
            </S.SingleColumn>
          ))}
        </S.List>
      </S.Right>
      <S.Footer>Powered by Jinhua Group Ltd.</S.Footer>
    </S.Container>
  );
}
