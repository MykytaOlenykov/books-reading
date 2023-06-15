import styled from "styled-components";

export const Modal = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 93px 20px 70px;
  min-width: 310px;
  max-width: ${({ theme }) => theme.breakpoints.mobile};
`;
