import styled from "styled-components";
import { PrimaryContainer } from "components/Common.styled";
import bgMobile from "assets/images/mobile/bg.jpg";
import bgMobile2x from "assets/images/mobile/bg.jpg";
import bgTablet from "assets/images/tablet/bg.jpg";
import bgTablet2x from "assets/images/tablet/bg.jpg";
import bgDesktop from "assets/images/desktop/bg.jpg";
import bgDesktop2x from "assets/images/desktop/bg.jpg";

const BgImgSection = styled.section`
  background-color: ${({ theme }) => theme.colors.primaryOverlay};
  background-image: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.primaryOverlay},
      ${({ theme }) => theme.colors.primaryOverlay}
    ),
    url(${bgMobile});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: linear-gradient(
        to right,
        ${({ theme }) => theme.colors.primaryOverlay},
        ${({ theme }) => theme.colors.primaryOverlay}
      ),
      url(${bgMobile2x});
  }

  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints.mobile} + 1px)) {
    background-image: linear-gradient(
        to right,
        ${({ theme }) => theme.colors.primaryOverlay},
        ${({ theme }) => theme.colors.primaryOverlay}
      ),
      url(${bgTablet});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          to right,
          ${({ theme }) => theme.colors.primaryOverlay},
          ${({ theme }) => theme.colors.primaryOverlay}
        ),
        url(${bgTablet2x});
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.dekstop}) {
    background-image: linear-gradient(
        to right,
        ${({ theme }) => theme.colors.primaryOverlay},
        ${({ theme }) => theme.colors.primaryOverlay}
      ),
      url(${bgDesktop});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          to right,
          ${({ theme }) => theme.colors.primaryOverlay},
          ${({ theme }) => theme.colors.primaryOverlay}
        ),
        url(${bgDesktop2x});
    }
  }
`;

export const Section = styled(BgImgSection)`
  padding: 32px 0;
  margin-left: auto;
  margin-right: auto;
  min-width: 310px;
  max-width: ${({ theme }) => theme.breakpoints.tablet};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 64px 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.dekstop}) {
    display: flex;
    align-items: center;
    flex-grow: 1;
    margin-left: 0;
    margin-right: 0;
    padding: 0;
    min-height: 790px;
    max-width: 549px;
  }
`;

export const Container = styled(PrimaryContainer)`
  width: 100%;
`;
