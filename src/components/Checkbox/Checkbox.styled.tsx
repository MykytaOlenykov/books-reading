import styled from "styled-components";
import { ReactComponent as CheckMark } from "assets/icons/check-mark.svg";

export const Box = styled.div<{ $checked: boolean }>`
  position: absolute;
  top: 20px;
  left: 0;

  width: 15px;
  height: 15px;

  border: 1px solid
    ${({ theme, $checked }) =>
      $checked ? theme.colors.accent : theme.colors.checkbox};
  border-radius: 1px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    top: 50%;

    transform: translateY(-50%);
  }
`;

export const Icon = styled(CheckMark)`
  position: absolute;
  top: 3px;
  left: 2px;

  width: 12px;
  height: 8px;

  fill: ${({ theme }) => theme.colors.accent};
`;
