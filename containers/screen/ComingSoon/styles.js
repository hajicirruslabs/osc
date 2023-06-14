import { FlexCenterStyle, Inner, WholeContainer } from "styles/common";
import * as C from "styles/common/color";
import styled from "styled-components";

import { Appear } from "@/styles/common";

export const Container = styled.div`
  ${FlexCenterStyle};
  ${WholeContainer};
  flex-direction: column;
  color: #fff0e8;
  font-family: Poppins;
`;

export const Background = styled.div`
  ${FlexCenterStyle};
  ${WholeContainer};
  mix-blend-mode: multiply;
  z-index: 0;
  // opacity: 0.7;

  img {
    width: 120%;
    height: 120%;
  }
`;
export const BackgroundLogo = styled.div`
  ${FlexCenterStyle};
  ${WholeContainer};
  z-index: 3;
  img {
    width: 80%;
    height: 80%;
  }
`;

export const LogoContainer = styled.div`
  position: absolute;
  top: 2vw;
  left: 2vw;
  width: 15vw;
  z-index: 3;

  img {
    width: 15vw;
  }
`;

export const Top = styled.div`
  font-family: Poppins;
  font-size: 1.5vw;
  top: 1vw;
  position: absolute;
  width: 100%;
  text-align: center;
  z-index: 3;
`;

export const Info = styled.div`
  z-index: 3;
  text-align: center;
  h1 {
    font-family: Poiret One;
    font-size: 5vw;
  }

  h2 {
    font-family: Poppins;
    font-size: 2.3vw;
    font-weight: normal;
  }
`;

export const Button = styled.div`
  z-index: 3;
  margin-top: 4vw;
  div {
    color: white;
    font-size: 1.8vw;
    padding: 0.5vw 2.3vw;
    background: #649973;
    border-radius: 1.3vw;
    ${FlexCenterStyle};
    text-align: center;
  }
  p {
    margin-top: 0.5vw;
    text-align: center;
    font-size: 1.25vw;
  }
`;

export const Footer = styled.div`
  z-index: 3;
  position: absolute;
  bottom: 1.5vw;
  width: 100%;
  color: #fff0e8;
  opacity: 0.7;
  font-size: 1.3vw;
  text-align: center;
`;
