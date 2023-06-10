// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryBg: string;
      secondaryBg: string;
      primaryOverlay: string;
      accent: string;
      googleBgBtn: string;
      googleTextBtn: string;
    };
    fontFamily: {
      logo: string;
      googleTextBtn: string;
    };
    fontSizes: {
      common: {
        logo: string;
        googleTextBtn: string;
      };
    };
    boxShadow: {
      header: string;
      googleBtn: string;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      dekstop: string;
    };
  }
}
