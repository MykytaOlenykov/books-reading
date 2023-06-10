import React from "react";
import { MutatingDots } from "react-loader-spinner";
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
    <MutatingDots
      height="100"
      width="100"
      color={theme.colors.accent}
      secondaryColor={theme.colors.accent}
      radius="12.5"
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  </Container>
);
