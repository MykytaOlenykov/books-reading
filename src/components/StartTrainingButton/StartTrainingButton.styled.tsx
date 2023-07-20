import styled from "styled-components";
import { PrimaryButton } from "components/Common.styled";

export const Button = styled(PrimaryButton)`
  margin-top: 32px;
  padding-left: 13px;
  padding-right: 13px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 40px;
  }
`;
