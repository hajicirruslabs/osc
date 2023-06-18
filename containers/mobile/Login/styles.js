import { FlexCenterStyle, Inner, WholeContainer } from "styles/common";
import * as C from "styles/common/color";
import styled from "styled-components";

import { Appear } from "@/styles/common";

export const Container = styled.div`
  ${Inner};
  display: flex;
  justify-content: center;

  opacity: 0;
  pointer-events: none;
  z-index: 0;

  min-height: ${({ theme }) => theme.windowHeight * 1.03}px;
  overflow-y: scroll;

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

  transition: opacity 1s ease-in-out;
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
  margin-top: 100px;
  ${FlexCenterStyle};
  flex-direction: column;
`;

export const Text = styled.div`
  text-align; center;
  ${FlexCenterStyle};
  flex-direction: column;
  font-size: ${({ theme }) => Math.min(theme.windowHeight * 0.02, 20)}px 0;
 
`;

export const ImageContainer = styled.div`
  width: ${({ theme }) => Math.min(theme.windowWidth * 0.5, 300)}px;
  height: 250px;
  margin: ${({ theme }) => Math.min(theme.windowHeight * 0.03, 30)}px 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const InputContainer = styled.div`
  width: ${({ theme }) => Math.min(theme.windowWidth * 0.8, 400)}px;
  margin-top: 20px;
  margin-bottom: 30px;
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
  font-size: 20px;

  ${FlexCenterStyle};
  text-align: center;
  font-family: Newsreader;
  height: 40px;

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
  height: 40px;
  margin: 10px 0;

  font-size: 20px;
  ${FlexCenterStyle};
  text-align: center;
  font-family: Newsreader;
  cursor: pointer;
`;
