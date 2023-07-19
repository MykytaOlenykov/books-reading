import styled from "styled-components";

export const Aside = styled.aside`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.dekstop}) {
    flex-shrink: 0;
    width: 288px;
  }
`;
