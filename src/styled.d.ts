// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    readonly colors: Readonly<{
      primary: string;
      primaryBg: string;
      secondaryBg: string;
      activeBg: string;
      primaryText: string;
      lightText: string;
      primaryOverlay: string;
      accent: string;
      googleBgBtn: string;
      googleTextBtn: string;
      inputBg: string;
      required: string;
      inputBorder: string;
      placeholder: string;
      formText: string;
      line: string;
      navLine: string;
      icon: string;
    }>;
    readonly fontFamily: Readonly<{
      primary: string;
      logo: string;
      googleTextBtn: string;
    }>;
    readonly fontSizes: Readonly<{
      header: Readonly<{
        logo: string;
      }>;
      authForm: Readonly<{
        primary: string;
        textBtn: string;
      }>;
      info: Readonly<{
        logo: string;
        title: string;
      }>;
      quote: Readonly<{
        primary: string;
        secondary: string;
        author: string;
      }>;
      tutorial: Readonly<{
        primary: string;
      }>;
      common: Readonly<{
        primary: string;
      }>;
    }>;
    readonly boxShadow: Readonly<{
      header: string;
      googleBtn: string;
      input: string;
      btn: string;
      tutorial: string;
    }>;
    readonly filter: Readonly<{
      btn: string;
    }>;
    readonly timingFunction: Readonly<{
      navLink: string;
      btn: string;
    }>;
    readonly breakpoints: Readonly<{
      mobile: string;
      tablet: string;
      dekstop: string;
    }>;
  }
}
