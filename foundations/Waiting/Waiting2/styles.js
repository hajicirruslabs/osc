import { FlexCenterStyle, Inner, WholeContainer } from "styles/common";
import * as C from "styles/common/color";
import styled from "styled-components";

import { Appear } from "@/styles/common";

export const Container = styled.div`
  ${FlexCenterStyle};
  ${WholeContainer};
  color: #fff0e8;
  font-family: Poppins;

  ${({ show }) => (show ? "opacity: 1;" : "opacity: 0;")}
  transition: opacity 0.5s ease-in-out;
`;
export const Background = styled.div`
  ${FlexCenterStyle};
  ${WholeContainer};
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

export const MainText = styled.div`
  max-width: 70vw;

  text-align: center;
  font-size: 6vw;
  line-height: 1;
  font-family: Poiret One;
  font-weight: bold;

  //transition: translateX

  ${({ transition }) =>
    transition
      ? `
opacity: 0;
 
  `
      : `
opacity: 1;
  `}// transition: all ease-in-out;
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 1.5vw;
  width: 100%;
  color: #fff0e8;
  opacity: 0.7;
  font-size: 1.3vw;
  text-align: center;
`;
