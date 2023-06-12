import React from "react";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";
import { theme } from "constants/";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 60px);
`;

export const PageLoader: React.FC = () => (
  <Container>
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color={theme.colors.accent}
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      visible={true}
    />
  </Container>
);
