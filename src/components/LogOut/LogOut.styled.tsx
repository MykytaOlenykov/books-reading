import styled from "styled-components";
import { PrimaryButton, SecondaryButton } from "components/Common.styled";

export const Container = styled.div`
  padding: 48px 22px;
  width: 280px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 48px 52px;
    width: 394px;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

export const CancelButton = styled(SecondaryButton)`
  margin-left: 0;
  margin-right: 16px;
  padding-right: 20px;
  padding-left: 20px;
  min-width: 100px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-right: auto;
    min-width: 130px;
  }
`;

export const AgreButton = styled(PrimaryButton)`
  margin: 0;
  padding-right: 20px;
  padding-left: 20px;
  min-width: 100px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-width: 130px;
  }
`;
