import styled from "styled-components";

export const Section = styled.section`
  padding: 32px 0 0;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 40px 0 0px;
  }
`;

export const Container = styled.div`
  padding: 12px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  box-shadow: 0px 2px 3px 0px rgba(9, 30, 63, 0.25);

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 20px;
  }
`;

export const Counter = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 4px;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 12px;
  line-height: 1.25;
  text-transform: uppercase;
`;

export const Count = styled.p`
  padding: 4px;
  min-width: 25px;

  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.42;
  text-transform: uppercase;

  background-color: ${({ theme }) => theme.colors.activeBg};
`;

export const Chart = styled.div`
  height: 240px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 270px;
  }
`;
