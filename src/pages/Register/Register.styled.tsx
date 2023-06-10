import styled from "styled-components";
import bgMobile from "assets/images/mobile/bg.jpg";
import bgMobile2x from "assets/images/mobile/bg.jpg";
import bgTablet from "assets/images/tablet/bg.jpg";
import bgTablet2x from "assets/images/tablet/bg.jpg";
import bgDesktop from "assets/images/desktop/bg.jpg";
import bgDesktop2x from "assets/images/desktop/bg.jpg";

export const Section = styled.section`
  margin: 0 auto;
  padding: 32px 0;
  max-width: ${({ theme }) => theme.breakpoints.tablet};

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
    max-width: ${({ theme }) => theme.breakpoints.dekstop};

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
