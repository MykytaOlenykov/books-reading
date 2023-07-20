import styled from "styled-components";
import { PrimaryContainer } from "components/Common.styled";

export const Container = styled(PrimaryContainer)`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.dekstop}) {
    display: flex;
    gap: 32px;
    padding-top: 40px;
    padding-bottom: 54px;
  }
`;
