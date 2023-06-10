const theme = Object.freeze({
  colors: {
    primary: "#242A37",
    primaryBg: "#F6F7FB",
    secondaryBg: "#FFFFFF",
    primaryOverlay: "rgba(9, 30, 63, 0.8)",
    accent: "#FF6B08",
    googleBgBtn: "#F5F7FA",
    googleTextBtn: "#707375",
  },
  fontFamily: {
    logo: "Abril Fatface",
    googleTextBtn: "Roboto",
  },
  fontSizes: {
    common: {
      logo: "20px",
      googleTextBtn: "16px",
    },
  },
  boxShadow: {
    header: "0px 2px 3px rgba(9, 30, 63, 0.1)",
    googleBtn: "0px 2px 2px rgba(9, 30, 63, 0.15)",
  },
  breakpoints: {
    mobile: "320px",
    tablet: "768px",
    dekstop: "1280px",
  },
});

Object.freeze(theme.colors);

Object.freeze(theme.fontFamily);

Object.freeze(theme.fontSizes);
Object.freeze(theme.fontSizes.common);

Object.freeze(theme.boxShadow.header);

Object.freeze(theme.breakpoints);

export { theme };
