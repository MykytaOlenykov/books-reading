import styled from "styled-components";

export const PrimaryContainer = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  min-width: 310px;
  max-width: ${({ theme }) => theme.breakpoints.dekstop};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 32px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.dekstop}) {
    padding: 0 16px;
  }
`;

export const PrimaryInput = styled.input`
  padding: 12px 12px 13px;
  width: 100%;

  color: ${({ theme }) => theme.colors.primary};
`;

export const PrimaryButton = styled.button`
  font-weight: 600;
  text-align: center;
  color: ${({ theme }) => theme.colors.lightText};

  background-color: ${({ theme }) => theme.colors.accent};
  border: none;
  cursor: pointer;

  &:hover,
  &:focus {
    box-shadow: ${({ theme }) => theme.boxShadow.btn};
  }
`;
