import styled from "styled-components";

export const Section = styled.section`
  padding: 20px 0 31px;
`;

export const Title = styled.h2`
  padding: 18px 0;

  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.scoreboard.title};
  line-height: 1.2;
  text-align: center;
  color: ${({ theme }) => theme.colors.lightText};

  background-color: ${({ theme }) => theme.colors.trainingBg};
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 44px 0;

  background-color: ${({ theme }) => theme.colors.secondaryBg};
  box-shadow: ${({ theme }) => theme.boxShadow.scoreboard};
`;

export const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 14px;
  width: 100px;
  height: 100px;

  background-color: ${({ theme }) => theme.colors.counterBg};
  box-shadow: ${({ theme }) => theme.boxShadow.counter};
`;

export const Value = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.scoreboard.counter};
  line-height: 0.84;
  text-align: center;
  color: ${({ theme }) => theme.colors.number};
`;

export const Descr = styled.p`
  max-width: 100px;

  line-height: 1.21;
  text-align: center;
  color: ${({ theme }) => theme.colors.primaryText};
`;
