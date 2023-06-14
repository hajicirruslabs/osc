import * as S from "./styles";

import { useState, useEffect, Suspense } from "react";

import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb";

const DUMMY_DATA = [{}, {}, {}, {}, {}, {}, {}, {}, {}];

export default function Comp({ show }) {
  return (
    <S.Container show={show}>
      <S.Background>
        <img src="/assets/screen/Company-Logo.svg" alt="logo" />
      </S.Background>
      <S.LogoContainer>
        <img src="/assets/images/logo-small.svg" alt="logo" />
      </S.LogoContainer>

      <S.Left>
        <Currency />

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
          <NewsSection />
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
                  <S.Image>
                    <img src="/assets/screen/graph.svg" alt="graph" />
                    <S.ImageWrapper />
                  </S.Image>

                  <S.Caution>caution! higher than average precipitation</S.Caution>
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

function Time() {
  //time now in hh:mm:ss

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <S.Time>
      <div>{date.toLocaleDateString()}</div>
      <div>{date.toLocaleTimeString()}</div>
    </S.Time>
  );
}

const NEWS_DATA = [
  {
    source: "Urban Times",
    title: "Tropic areas urge urban workforce to channel inherent mindset into new...",
    image: "/assets/screen/News-1.png",
  },
  {
    source: "FloraFeed",
    title: "Concerns grow as famed Rafflesia, supported by Jinhua, loses smell",
    image: "/assets/screen/News-2.png",
  },

  {
    source: "Seasons",
    title: "Breath proven to transfer small amounts of human DNA to plants",
    image: "/assets/screen/News-3.png",
  },
  {
    source: "EmbReal",
    title: "New hair extraction techniques cause fluctuation in urban exchange rates",
    image: "/assets/screen/News-4.png",
  },
];

function NewsSection() {
  const [displayIdx, setDisplayIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayIdx((prev) => (prev + 1) % NEWS_DATA.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <S.NewsSection>
      {NEWS_DATA.map((datum, i) => (
        <S.SingleNewsEl key={i} index={((displayIdx - i + NEWS_DATA.length) % NEWS_DATA.length) - 1}>
          <S.NewsLeft>
            <h3>{datum.source}</h3>
            <p>{datum.title}</p>
          </S.NewsLeft>
          <S.NewsRight>
            <img src={datum.image} alt="news" />
          </S.NewsRight>
        </S.SingleNewsEl>
      ))}
    </S.NewsSection>
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

      <Time />
    </S.CurrencyContainer>
  );
}
