import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  align-items: center;
  gap: 12px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: absolute;
    left: 50%;
    top: 50%;

    transform: translate(-50%, -50%);
  }
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

export const UserName = styled.p`
  display: none;
  max-width: 240px;

  font-weight: 300;
  line-height: 1.21;
  text-overflow: ellipsis;
  white-space: nowrap;

  overflow: hidden;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
`;
