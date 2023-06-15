import { FlexCenterStyle, Inner, WholeContainer } from "styles/common";
import * as C from "styles/common/color";
import styled from "styled-components";

import { Appear } from "@/styles/common";

export const LoadingContainer = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
  ${WholeContainer};
  width: ${({ theme }) => theme.windowWidth}px;
  height: ${({ theme }) => theme.windowHeight}px;
  z-index: 1000;
  pointer-events: none;

  ${({ loading }) =>
    loading
      ? `
  
    opacity: 1;
  `
      : `
    opacity: 0;
    pointer-events: none;
  `}

  transition: all .3s;
  backdrop-filter: blur(1rem) brightness(0.8);

  h1 {
    font-family: Poppins;
  }

  h2 {
    font-family: Newsreader;
    font-size: 1.5rem;
    font-weight: 400;
  }
`;

export const LoadingImage = styled.div`
  width: 350px;
  height: 350px;
  margin: 20px 0;

  img {
    width: 100%;
    height: 100%;
  }
`;
