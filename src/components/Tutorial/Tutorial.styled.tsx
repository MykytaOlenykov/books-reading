import styled from "styled-components";
import { ReactComponent as LibraryIcon } from "assets/icons/library-icon.svg";
import { ReactComponent as Flag } from "assets/icons/flag.svg";
import { ReactComponent as TutorialArrow } from "assets/icons/tutorial-arrow.svg";
import { PrimaryButton } from "components/Common.styled";

export const Container = styled.div`
  padding: 43px 20px 36px;

  background-color: ${({ theme }) => theme.colors.secondaryBg};
  box-shadow: ${({ theme }) => theme.boxShadow.tutorial};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
    padding: 40px;
    max-width: 608px;
  }
`;

export const List = styled.ul`
  margin-bottom: 40px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 0;
  }
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      margin-bottom: 24px;
    }
  }
`;

export const Thumb = styled.div`
  display: flex;
  gap: 12px;

  &.sg {
    gap: 8px;
  }
`;

export const PrimaryTitle = styled.h2`
  margin-bottom: 8px;

  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.tutorial.primary};
  line-height: 1.22;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 16px;

    font-size: ${({ theme }) => theme.fontSizes.tutorial.primaryTitle};
    line-height: 1.21;
  }
`;

export const TextBox = styled.div``;

export const Title = styled.h3`
  margin-bottom: 8px;

  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.common.primary};
  line-height: 1.21;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.tutorial.secondaryTitle};
    line-height: 1.25;
  }
`;

export const Text = styled.p`
  font-weight: 400;
  line-height: 1.21;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const BookIcon = styled(LibraryIcon)`
  flex-shrink: 0;
  width: 22px;
  height: 17px;

  fill: ${({ theme }) => theme.colors.icon};
`;

export const FlagIcon = styled(Flag)`
  flex-shrink: 0;
  width: 15px;
  height: 17px;

  fill: ${({ theme }) => theme.colors.icon};
`;

export const ArrowIcon = styled(TutorialArrow)`
  flex-shrink: 0;
  width: 10px;
  height: 12px;

  fill: ${({ theme }) => theme.colors.accent};

  transform: translateY(3px);
`;

export const Button = styled(PrimaryButton)`
  min-width: 127px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;
