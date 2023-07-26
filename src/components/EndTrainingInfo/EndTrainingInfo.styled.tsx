import styled from "styled-components";
import { SecondaryButton } from "components/Common.styled";
import { ReactComponent as ThumbUpIcon } from "assets/icons/thumb_up.svg";

export const Conatiner = styled.div`
  padding: 44px 22px;
  width: 280px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 44px 30px;
    width: 394px;
  }
`;

export const Icon = styled(ThumbUpIcon)<{ $isAccent: boolean }>`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 4px;
  width: 54px;
  height: 54px;

  fill: ${({ theme, $isAccent }) =>
    $isAccent ? theme.colors.accent : theme.colors.icon};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 14px;
  }
`;

export const Button = styled(SecondaryButton)`
  margin: 0;
  padding-left: 24px;
  padding-right: 24px;
  min-width: 152px;
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  margin-top: 24px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
  }
`;
