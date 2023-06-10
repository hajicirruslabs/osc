import { FlexCenterStyle, Inner, WholeContainer } from "styles/common";
import * as C from "styles/common/color";
import styled from "styled-components";

import { Appear } from "@/styles/common";

export const Container = styled.div`
  ${Inner};
  ${WholeContainer};
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
