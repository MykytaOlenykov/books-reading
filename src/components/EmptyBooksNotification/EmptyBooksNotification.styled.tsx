import styled from "styled-components";

export const Text = styled.p`
  padding: 40px 0;

  font-weight: 400;
  line-height: 1.21;
  text-align: center;
  color: ${({ theme }) => theme.colors.primaryText};
`;
