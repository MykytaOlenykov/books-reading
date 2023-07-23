import { SecondaryButton } from "components/Common.styled";
import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  padding-top: 32px;
  padding-bottom: 32px;
  max-width: 290px;
  width: 100%;
`;

export const CancelBtn = styled(SecondaryButton)`
  margin-top: 32px;
  padding-left: 12px;
  padding-right: 12px;
  min-width: 220px;
`;
