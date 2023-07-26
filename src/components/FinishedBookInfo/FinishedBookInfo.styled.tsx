import styled from "styled-components";
import { PrimaryButton } from "components/Common.styled";
import { ReactComponent as ThumbUpIcon } from "assets/icons/thumb_up.svg";

export const Conatiner = styled.div`
  padding: 40px 22px;
  width: 280px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 40px 52px;
    width: 394px;
  }
`;

export const Icon = styled(ThumbUpIcon)`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 14px;
  width: 54px;
  height: 54px;

  fill: ${({ theme }) => theme.colors.accent};
`;

export const Button = styled(PrimaryButton)`
  margin-top: 24px;
  padding-left: 24px;
  padding-right: 24px;
  min-width: 130px;
`;
