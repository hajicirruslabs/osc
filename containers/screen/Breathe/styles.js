import { FlexCenterStyle, Inner, WholeContainer } from "styles/common";
import * as C from "styles/common/color";
import styled from "styled-components";

import { Appear } from "@/styles/common";

export const Container = styled.div`
  ${FlexCenterStyle};
  ${WholeContainer};
  transition: 0.5s;

  animation: ${Appear} 1s ease-in-out both;
  animation-delay: 0.5s;
`;
export const Cover = styled.div`
  position: absolute;
  width: 100%;
  height: 10vh;
  background: black;
  z-index: 10;

  animation: ${Appear} 5s reverse ease-in-out both;
  animation-delay: 4s;
`;
