import { FlexCenterStyle, Inner } from "styles/common";
import styled from "styled-components";

import { Appear } from "@/styles/common";

export const Container = styled.div`
  ${Inner};
  ${FlexCenterStyle};

  opacity: 1;
  z-index: 1;
  ${({ show }) =>
    show
      ? `
    opacity: 1;
    pointer-events: all;
  `
      : `
    opacity: 0;
    pointer-events: none;
  `}

  transition: opacity 0.5s ease-in-out;
`;

export const LogoContainer = styled.div`
  ${FlexCenterStyle}
  width: 80%;

  img {
    width: 100%;
  }
`;
