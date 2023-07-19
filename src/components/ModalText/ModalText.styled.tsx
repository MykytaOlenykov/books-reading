import styled from "styled-components";

export const Text = styled.p`
  margin-bottom: 20px;

  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.modal.primary};
  line-height: 1.38;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 24px;
  }
`;
