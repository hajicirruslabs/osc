import * as S from "./styles";

import { useState, useEffect, Suspense } from "react";
import { useRouter } from "next/router";

import useSocket from "utils/hooks/sockets/screen/useSocketWaiting";

import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb";

const DUMMY_DATA = [{}, {}, {}, {}, {}, {}, {}, {}, {}];

export default function Comp() {
  const socket = useSocket({
    handleNewPageLocation,
  });
  ///page management
  const router = useRouter();
  function handleNewPageLocation(data) {
    router.push(data);
  }

  return (
    <S.Container>
      <S.Background>
        <img src="/assets/screen/Company-Logo.svg" alt="logo" />
      </S.Background>
      <S.LogoContainer>
        <img src="/assets/images/logo-small.svg" alt="logo" />
      </S.LogoContainer>

      <S.Left>
        <Currency />
        {/* <S.Commercial></S.Commercial> */}
        <S.QRContainer>
          <S.QRWrapper>
            <img src="/assets/screen/QR.svg" alt="qr" />
          </S.QRWrapper>

          <S.Text>
            <p>Your region is the 8th highest performing in the current climate zone.</p>
            <p>Please scan to contribute to its longevity.</p>
          </S.Text>
        </S.QRContainer>
      </S.Left>
      <S.Right>
        <h1>Top 9 Flourishing Regions of the Temperates</h1>
        <S.RankingSection>
          {DUMMY_DATA.map((datum, i) => (
            <S.SingleEl key={i} border={Math.random() < 0.3}>
              {i < 3 && (
                <S.Ranking big={i === 0}>
                  <img src={`/assets/screen/Ribbon-${i + 1}.svg`} alt="ranking" />
                </S.Ranking>
              )}
            </S.SingleEl>
          ))}
        </S.RankingSection>
        <S.BottomInfo>
          <S.NewsSection>
            <S.SingleNewsEl>
              <S.NewsLeft>
                <h3>Urban Times</h3>
                <p>Tropic areas urge urban workforce to channel inherenrt mindset into...</p>
              </S.NewsLeft>
              <S.NewsRight>
                <img src="/assets/screen/News-1.png" alt="news" />
              </S.NewsRight>
            </S.SingleNewsEl>
            <S.SingleNewsEl>
              <S.NewsLeft>
                <h3>FloraFeed</h3>
                <p>Concerns grow as famed Rafflesia, supported by Jinhua, loses smell</p>
              </S.NewsLeft>
              <S.NewsRight>
                <img src="/assets/screen/News-2.png" alt="news" />
              </S.NewsRight>
            </S.SingleNewsEl>
          </S.NewsSection>
          <S.WeatherSection>
            <S.WeatherUpper>
              <S.WeatherLeft>
                <img src="/assets/screen/sunny.svg" alt="Sunny" />
              </S.WeatherLeft>
              <S.WeatherRight>
                <h1>32ºC</h1>
                <h2>sun showers</h2>
                <h3>expect weather to affect circadian rhythm of resting plants</h3>
                <S.WeatherLower>
                  <img src="/assets/screen/graph.svg" alt="graph" />
                  <p>caution! higher than average precipitation</p>
                </S.WeatherLower>
              </S.WeatherRight>
            </S.WeatherUpper>
          </S.WeatherSection>
        </S.BottomInfo>
      </S.Right>
      {/* <S.Footer>Powered by Jinhua Group Ltd.</S.Footer> */}
    </S.Container>
  );
}

function Currency() {
  return (
    <S.CurrencyContainer>
      <S.Title>
        <h1>{"Currency Conversion"}</h1>
      </S.Title>

      <S.Table>
        <S.LeftColumn>
          <S.TableTitle>Donation per Unit</S.TableTitle>
          <S.Item up={true}>
            Breath <span>per exhale</span>
          </S.Item>
          <S.Item up={false}>
            Atenttion <span>per hr</span>
          </S.Item>

          <S.Item up={false}>
            Blood plasma <span>per ml</span>
          </S.Item>
          <S.Item up={false}>
            Hair follicle <span>per g</span>
          </S.Item>
          <S.Item up={true}>
            Nail bed <span>per g</span>
          </S.Item>
          <S.Item up={false}>
            Activated soil <span>per kg</span>
          </S.Item>
        </S.LeftColumn>
        <S.RightColumn>
          <S.TableTitle>
            {" "}
            <img src="/assets/screen/osc.svg" alt="osc" />
          </S.TableTitle>
          <S.Item up={true}>
            <img src="/assets/screen/osc-up.svg" alt="osc" />
            <S.Span>1.5</S.Span>
            <b>
              <TbTriangleFilled />
            </b>
          </S.Item>
          <S.Item up={false}>
            <img src="/assets/screen/osc-down.svg" alt="osc" />
            <S.Span>90</S.Span>
            <b>
              <TbTriangleInvertedFilled />
            </b>
          </S.Item>
          <S.Item up={false}>
            <img src="/assets/screen/osc-down.svg" alt="osc" />
            <S.Span>45</S.Span>
            <b>
              <TbTriangleInvertedFilled />
            </b>
          </S.Item>
          <S.Item up={false}>
            <img src="/assets/screen/osc-down.svg" alt="osc" />
            <S.Span>18</S.Span>
            <b>
              <TbTriangleInvertedFilled />
            </b>
          </S.Item>
          <S.Item up={true}>
            <img src="/assets/screen/osc-up.svg" alt="osc" />
            <S.Span>16</S.Span>
            <b>
              <TbTriangleFilled />
            </b>
          </S.Item>
          <S.Item up={false}>
            <img src="/assets/screen/osc-down.svg" alt="osc" />
            <S.Span>3</S.Span>
            <b>
              <TbTriangleInvertedFilled />
            </b>
          </S.Item>
        </S.RightColumn>
      </S.Table>
    </S.CurrencyContainer>
  );
}
