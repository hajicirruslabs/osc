import { FlexCenterStyle, Inner, WholeContainer } from "styles/common";
import * as C from "styles/common/color";
import styled from "styled-components";

export const Container = styled.div`
  ${Inner};
  ${FlexCenterStyle};

  opacity: 0;

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

export const Main = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;

  overflow-y: scroll;
`;

export const TopSection = styled.div``;

export const CirlceSection = styled.div``;

export const CircleUpper = styled.div``;

export const CircleLower = styled.div``;

export const ListSection = styled.div``;

export const List = styled.div``;
