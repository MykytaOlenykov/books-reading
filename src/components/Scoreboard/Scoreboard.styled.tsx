import styled from "styled-components";

export const Section = styled.section`
  padding: 20px 0 32px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 32px 0 40px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.dekstop}) {
    padding: 0;
  }
`;

export const Container = styled.div`
  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints.tablet})) and (max-width: calc(${({ theme }) =>
      theme.breakpoints.dekstop} - 1px)) {
    display: flex;
    align-items: start;
    padding: 20px 52px 8px 28px;

    background-color: ${({ theme }) => theme.colors.secondaryBg};
    box-shadow: ${({ theme }) => theme.boxShadow.title};
  }
`;

export const Title = styled.h2`
  padding: 18px 0;

  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.training.title};
  line-height: 1.2;
  text-align: center;
  color: ${({ theme }) => theme.colors.lightText};

  background-color: ${({ theme }) => theme.colors.trainingBg};
  box-shadow: ${({ theme }) => theme.boxShadow.title};

  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints.tablet})) and (max-width: calc(${({ theme }) =>
      theme.breakpoints.dekstop} - 1px)) {
    margin-right: auto;
    padding: 18px 28px;

    transform: translateY(3px);
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-wrap: wrap;
  gap: 20px;
  padding: 44px 24px;

  background-color: ${({ theme }) => theme.colors.secondaryBg};
  box-shadow: ${({ theme }) => theme.boxShadow.scoreboard};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 40px;
    padding: 0;

    box-shadow: none;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.dekstop}) {
    gap: 20px;
    padding: 48px 24px;

    box-shadow: ${({ theme }) => theme.boxShadow.scoreboard};
  }

  .isActive & {
    row-gap: 20px;
    column-gap: 4px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      gap: 12px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.dekstop}) {
      row-gap: 20px;
      column-gap: 4px;
      padding: 80px 24px;
    }
  }
`;

export const Item = styled.li`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 14px;
  padding: 0 12px;
  min-width: 100px;
  height: 100px;

  background-color: ${({ theme }) => theme.colors.counterBg};
  box-shadow: ${({ theme }) => theme.boxShadow.counter};

  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints.tablet})) and (max-width: calc(${({ theme }) =>
      theme.breakpoints.dekstop} - 1px)) {
    margin-bottom: 4px;
    height: 60px;
  }

  .isActive & {
    padding: 0 10px;
    min-width: 63px;
    height: 63px;

    @media screen and (min-width: calc(${({ theme }) =>
        theme.breakpoints.tablet})) and (max-width: calc(${({ theme }) =>
        theme.breakpoints.dekstop} - 1px)) {
      min-width: 100px;
      height: 60px;
    }
  }
`;

export const Value = styled.p<{ $isAccent?: boolean }>`
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.training.counterPrimary};
  line-height: 0.84;
  text-align: center;
  color: ${({ theme, $isAccent }) =>
    $isAccent ? theme.colors.accent : theme.colors.number};

  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints.tablet})) and (max-width: calc(${({ theme }) =>
      theme.breakpoints.dekstop} - 1px)) {
    font-size: ${({ theme }) => theme.fontSizes.training.counterSecondary};
    line-height: 0.95;
  }

  .isActive & {
    font-size: ${({ theme }) => theme.fontSizes.training.counterText};
    line-height: 1.09;

    @media screen and (min-width: calc(${({ theme }) =>
        theme.breakpoints.tablet})) and (max-width: calc(${({ theme }) =>
        theme.breakpoints.dekstop} - 1px)) {
      font-size: ${({ theme }) => theme.fontSizes.training.counterSecondary};
      line-height: 0.95;
    }
  }
`;

export const Descr = styled.p`
  margin: 0 auto;
  max-width: 100px;

  line-height: 1.21;
  text-align: center;
  color: ${({ theme }) => theme.colors.primaryText};

  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints.tablet})) and (max-width: calc(${({ theme }) =>
      theme.breakpoints.dekstop} - 1px)) {
    font-size: ${({ theme }) => theme.fontSizes.training.textPrimary};
    line-height: 1.18;
  }

  .isActive & {
    max-width: 74px;

    font-size: ${({ theme }) => theme.fontSizes.training.textPrimary};
    line-height: 1.18;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      max-width: 100px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.dekstop}) {
      max-width: 74px;

      font-size: ${({ theme }) => theme.fontSizes.training.textSecondary};
      line-height: 1.25;
    }
  }
`;
