import React from "react";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";
import { theme } from "constants/";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Loader: React.FC = () => (
  <Container>
    <ThreeDots
      height="60"
      width="60"
      radius="9"
      color={theme.colors.accent}
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      visible={true}
    />
  </Container>
);
