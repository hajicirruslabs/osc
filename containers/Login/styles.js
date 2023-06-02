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

export const LogoContainer = styled.div`
  position: absolute;
  top: 13px;
  left: 25px;
  width: 102px;

  img {
    width: 100%;
  }
`;

export const Main = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
`;

export const Text = styled.div`
  text-align; center;
  ${FlexCenterStyle};
  flex-direction: column;
  font-size: 24px;
  bold {
    font-weight: bold;
  }

`;

export const ModelContainer = styled.div`
  width: 300px;
  height: 259px;
  margin: 15px 0;
`;

export const InputContainer = styled.div`
  width: ${({ theme }) => Math.min(theme.windowWidth * 0.8, 400)}px;
  margin-top: 40px;
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 10px;
  color: ${C.ORANGE};
  background: ${C.WHITE};
  padding: 0;
  margin: 0;

  border: 0;
  outline: 0;
  font-size: 24px;

  ${FlexCenterStyle};
  text-align: center;
  font-family: Newsreader;
  height: 53px;

  &:focus {
    box-shadow: 0 0 30px 0 ${C.WHITE};
  }

  &::placeholder {
    color: ${C.ORANGE_OPAQUE};
  }

  transition: all 0.5s ease-in-out;
`;

export const Button = styled.div`
  width: 100%;
  border-radius: 10px;
  background: ${C.ORANGE};
  color: ${C.WHITE};
  height: 53px;
  margin: 14px 0;

  font-size: 24px;
  ${FlexCenterStyle};
  text-align: center;
  font-family: Newsreader;
`;
