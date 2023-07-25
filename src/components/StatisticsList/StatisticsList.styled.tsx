import styled from "styled-components";

export const Container = styled.div`
  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints.tablet})) and (max-width: calc(${({ theme }) =>
      theme.breakpoints.dekstop} - 1px)) {
    width: calc(50%);
  }
`;

export const SwiperContainer = styled.div`
  user-select: none;

  & .swiper {
    max-height: calc(17px * 5 + 4px * 4);

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      max-height: calc(17px * 10 + 4px * 9);
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.dekstop}) {
      max-height: calc(17px * 5 + 4px * 4);
    }
  }

  & .swiper-slide {
    height: 17px !important;
  }
`;

export const Title = styled.h3`
  position: relative;
  margin-bottom: 4px;

  font-size: ${({ theme }) => theme.fontSizes.statistics.primary};
  line-height: 1.25;
  text-transform: uppercase;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};

  &::before {
    content: "";

    position: absolute;
    left: 0;
    top: 50%;

    display: block;
    width: 72px;
    height: 1px;

    background-color: ${({ theme }) => theme.colors.line};
    transform: translateY(-50%);

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      width: 64px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.dekstop}) {
      width: 72px;
    }
  }

  &::after {
    content: "";

    position: absolute;
    right: 0;
    top: 50%;

    display: block;
    width: 72px;
    height: 1px;

    background-color: ${({ theme }) => theme.colors.line};
    transform: translateY(-50%);

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      width: 64px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.dekstop}) {
      width: 72px;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.common.primary};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.dekstop}) {
    font-size: ${({ theme }) => theme.fontSizes.statistics.primary};
  }
`;

export const Item = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const Date = styled.p`
  font-weight: 400;
  line-height: 1.21;
  text-transform: uppercase;
`;

export const Time = styled.p`
  color: ${({ theme }) => theme.colors.primaryText};
  font-weight: 400;
  line-height: 1.21;
  text-transform: uppercase;
  text-align: center;
`;

export const Pages = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 4px;
`;

export const Value = styled.p`
  font-weight: 400;
  line-height: 1.21;
  text-transform: uppercase;
`;

export const Descr = styled.p`
  color: ${({ theme }) => theme.colors.primaryText};
  font-weight: 400;
  line-height: 1.21;
`;

export const Info = styled.p`
  font-weight: 400;
  line-height: 1.21;
  text-align: center;
  color: ${({ theme }) => theme.colors.primaryText};
`;
