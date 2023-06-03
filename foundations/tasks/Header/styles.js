import { FlexCenterStyle, Inner, WholeContainer } from "styles/common";
import * as C from "styles/common/color";
import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  position: absolute;
  // align-items: center;
  justify-content: center;
  width: 100%;
  top: 0;
  margin-top: 31px;
  color: ${({ color }) => color};
`;

export const Left = styled.div`
  position: absolute;
  left: 10px;
  top: 10px;

  font-size: 35px;
`;

export const Middle = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
`;

export const Title = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
  text-align: center;

  p {
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
  }
`;

export const Button = styled.div`
  color: ${C.WHITE};
  background: ${({ color }) => color};
  font-size: 20px;
  font-weight: 600;
  width: 78px;
  height: 44px;
  ${FlexCenterStyle};
  margin-top: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  img {
    width: 16px;
    margin-right: 3px;
  }
`;
