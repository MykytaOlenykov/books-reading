import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as HomeIcon } from "assets/icons/home-icon.svg";
import { ReactComponent as LibraryIcon } from "assets/icons/library-icon.svg";

export const Nav = styled.nav`
  position: relative;

  &::after {
    content: "";

    position: absolute;
    right: -9px;
    top: 0;

    display: block;
    width: 1px;
    height: 100%;

    background-color: ${({ theme }) => theme.colors.line};
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 7.5px;
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33px;
  height: 33px;

  color: ${({ theme }) => theme.colors.icon};

  border-radius: 50%;

  transition: color ${({ theme }) => theme.timingFunction.navLink} linear;

  &.active {
    background-color: ${({ theme }) => theme.colors.activeBg};
  }

  &:not(.active):hover,
  &:not(.active):focus {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const HomePageIcon = styled(HomeIcon)`
  width: 20px;
  height: 17px;

  fill: currentColor;
`;

export const LibraryPageIcon = styled(LibraryIcon)`
  width: 22px;
  height: 17px;

  fill: currentColor;
`;
