import styled from "styled-components";

export const Section = styled.section`
  padding-top: 20px;

  &.goingToRead {
    padding-bottom: 128px;
  }

  &.training {
    padding-top: 0;
  }
`;

export const Title = styled.h2`
  margin-bottom: 20px;

  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.booksSection.primary};
  line-height: 1.21;
  color: ${({ theme }) => theme.colors.primary};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 24px;
  }
`;

export const List = styled.ul`
  .training & {
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      border-bottom: 1px solid ${({ theme }) => theme.colors.line};
    }
  }
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;
