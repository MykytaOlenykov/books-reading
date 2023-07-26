import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
  padding: 20px 0;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 32px;
    padding: 40px 0 8px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.dekstop}) {
    gap: 74px;
    padding: 0 0 40px;
  }
`;
