import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 17px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 28px;
  padding: 0 14px;
  min-width: 150px;
  min-height: 40px;

  font-family: ${({ theme }) => theme.fontFamily.googleTextBtn};
  font-style: normal;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.common.googleTextBtn};
  line-height: 2.38;
  color: ${({ theme }) => theme.colors.googleTextBtn};

  background-color: ${({ theme }) => theme.colors.googleBgBtn};
  border: none;
  box-shadow: ${({ theme }) => theme.boxShadow.googleBtn};
`;
