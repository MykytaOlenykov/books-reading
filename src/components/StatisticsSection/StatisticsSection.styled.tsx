import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
  justify-content: center;
  margin-top: 32px;
  padding: 20px;

  background-color: ${({ theme }) => theme.colors.secondaryBg};
  box-shadow: ${({ theme }) => theme.boxShadow.statistics};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    gap: 32px;
    margin-top: 40px;
    padding: 32px 96px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.dekstop}) {
    flex-direction: column;
    gap: 24px;
    padding: 20px 24px;
  }
`;
