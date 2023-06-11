import styled from "styled-components";
import bgMobile from "assets/images/mobile/bg.jpg";
import bgMobile2x from "assets/images/mobile/bg.jpg";
import bgTablet from "assets/images/tablet/bg.jpg";
import bgTablet2x from "assets/images/tablet/bg.jpg";
import bgDesktop from "assets/images/desktop/bg.jpg";
import bgDesktop2x from "assets/images/desktop/bg.jpg";

export const BgImgSection = styled.section`
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

export const PrimaryContainer = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  min-width: 310px;
  max-width: ${({ theme }) => theme.breakpoints.mobile};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 32px;
    max-width: ${({ theme }) => theme.breakpoints.tablet};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.dekstop}) {
    padding: 0 16px;
    max-width: ${({ theme }) => theme.breakpoints.dekstop};
  }
`;

export const PrimaryInput = styled.input`
  padding: 12px 12px 13px;
  width: 100%;

  color: ${({ theme }) => theme.colors.primary};
`;

export const PrimaryButton = styled.button``;