import styled from "styled-components";
import { ReactComponent as LibraryIcon } from "assets/icons/library-icon.svg";
import { ReactComponent as Flag } from "assets/icons/flag.svg";
import { ReactComponent as TutorialArrow } from "assets/icons/tutorial-arrow.svg";
import { PrimaryButton } from "components/Common.styled";

export const Container = styled.div`
  padding: 43px 20px 36px;

  background-color: ${({ theme }) => theme.colors.secondaryBg};
  box-shadow: ${({ theme }) => theme.boxShadow.tutorial};
`;

export const List = styled.ul`
  margin-bottom: 40px;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
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
`;

export const TextBox = styled.div``;

export const Title = styled.h3`
  margin-bottom: 8px;

  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.common.primary};
  line-height: 1.21;
`;

export const Text = styled.p`
  font-weight: 400;
  line-height: 1.21;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const BookIcon = styled(LibraryIcon)`
  flex-shrink: 0;
  fill: ${({ theme }) => theme.colors.icon};
`;

export const FlagIcon = styled(Flag)`
  flex-shrink: 0;
  fill: ${({ theme }) => theme.colors.icon};
`;

export const ArrowIcon = styled(TutorialArrow)`
  flex-shrink: 0;
  fill: ${({ theme }) => theme.colors.accent};
`;

export const Button = styled(PrimaryButton)`
  min-width: 127px;
`;
