import React from "react";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";

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
      color="#FF6B08"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      visible={true}
    />
  </Container>
);
