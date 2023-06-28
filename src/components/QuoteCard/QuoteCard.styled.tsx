import styled from "styled-components";
import { ReactComponent as QuotesIcon } from "assets/icons/quotes-icon.svg";

export const Article = styled.article`
  position: relative;

  margin-top: 4px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 45px;
  padding-bottom: 16px;
  max-width: 229px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 64px;
    padding-top: 62px;
    padding-bottom: 71px;
    max-width: 526px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.dekstop}) {
    margin-top: 0;
    padding-top: 0;
    padding-bottom: 0;
    max-width: 397px;
  }
`;

export const Icon = styled(QuotesIcon)`
  position: absolute;
  top: 18px;
  left: 50%;

  width: 25px;
  height: 18px;

  fill: ${({ theme }) => theme.colors.accent};

  transform: translateX(-50%);

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    top: 22px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.dekstop}) {
    top: -36px;
  }
`;

export const Text = styled.p`
  position: relative;

  margin-bottom: 28px;

  font-size: ${({ theme }) => theme.fontSizes.quote.primary};
  line-height: 1.23;
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 32px;

    font-size: ${({ theme }) => theme.fontSizes.quote.secondary};
    line-height: 1.58;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.dekstop}) {
    line-height: 1.67;
  }

  &::after {
    content: "";

    position: absolute;
    left: 50%;
    bottom: -16px;

    display: block;
    width: 100px;
    height: 1px;

    background-color: ${({ theme }) => theme.colors.qouteLine};

    transform: translateX(-50%);

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      bottom: -20px;

      width: 150px;
    }
  }
`;

export const Author = styled.h2`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes.common.primary};
  line-height: 1.21;
  text-align: center;
  color: ${({ theme }) => theme.colors.primaryText};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.quote.author};
    line-height: 1.2;
  }
`;
