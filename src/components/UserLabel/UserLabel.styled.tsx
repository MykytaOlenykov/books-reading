import styled from "styled-components";

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

    background-color: ${({ theme }) => theme.colors.navLine};
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 7.5px;
`;

export const Thumb = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33px;
  height: 33px;

  background-color: ${({ theme }) => theme.colors.activeBg};
  border-radius: 50%;
`;

export const UserIcon = styled.p`
  font-weight: 600;
`;
