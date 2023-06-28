import styled from "styled-components";
import { ReactComponent as LibraryIcon } from "assets/icons/library-icon.svg";

export const BookCard = styled.div`
  position: relative;

  padding: 32px 40px;

  border-top: 1px solid ${({ theme }) => theme.colors.line};
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};
`;

export const CardTitle = styled.p`
  margin-bottom: 12px;

  font-size: ${({ theme }) => theme.fontSizes.common.primary};
  line-height: 1.21;
  color: ${({ theme }) => theme.colors.primary};
`;

export const List = styled.ul``;

export const Item = styled.li`
  display: flex;
  gap: 28px;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const Title = styled.p`
  width: 42px;

  font-size: ${({ theme }) => theme.fontSizes.booksSection.secondary};
  line-height: 1.25;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const Descr = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.booksSection.secondary};
  line-height: 1.25;
  color: ${({ theme }) => theme.colors.primary};
`;

export const BookIcon = styled(LibraryIcon)`
  position: absolute;
  top: 32px;
  left: 0;

  width: 22px;
  height: 17px;

  fill: ${({ theme }) => theme.colors.icon};
`;
