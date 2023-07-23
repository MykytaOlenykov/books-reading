import styled from "styled-components";

export const Container = styled.div`
  @media screen and (max-width: calc(${({ theme }) =>
      theme.breakpoints.tablet} - 1px)) {
    width: 100%;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-width: 290px;
  }
`;

export const Title = styled.h3`
  margin-bottom: 8px;

  font-size: ${({ theme }) => theme.fontSizes.common.primary};
  font-weight: 500;
  text-align: center;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const TimeContainer = styled.div`
  padding: 1px 12px 8px;

  background-color: ${({ theme }) => theme.colors.secondaryBg};
  box-shadow: ${({ theme }) => theme.boxShadow.timer};
`;

export const List = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const Value = styled.p`
  margin-bottom: 1px;

  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-size: ${({ theme }) => theme.fontSizes.timer.primary};
  font-weight: 700;
  line-height: 1.52;
  text-align: center;
  color: ${({ theme }) => theme.colors.number};
`;

export const Descr = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.timer.secondary};
  line-height: 1.2;
  text-align: center;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const Separator = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-size: ${({ theme }) => theme.fontSizes.timer.primary};
  font-weight: 700;
  line-height: 1.52;
  text-align: center;
  color: ${({ theme }) => theme.colors.number};
`;
