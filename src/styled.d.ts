// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    readonly colors: {
      readonly primary: string;
      readonly primaryBg: string;
      readonly secondaryBg: string;
      readonly primaryText: string;
      readonly lightText: string;
      readonly primaryOverlay: string;
      readonly accent: string;
      readonly googleBgBtn: string;
      readonly googleTextBtn: string;
      readonly inputBg: string;
      readonly required: string;
      readonly placeholder: string;
      readonly formText: string;
    };
    readonly fontFamily: {
      readonly primary: string;
      readonly logo: string;
      readonly googleTextBtn: string;
    };
    readonly fontSizes: {
      readonly header: {
        readonly logo: string;
      };
      readonly authForm: {
        readonly primary: string;
        readonly textBtn: string;
      };
      readonly info: {
        readonly logo: string;
        readonly title: string;
      };
      readonly common: {
        readonly primary: string;
      };
    };
    readonly boxShadow: {
      readonly header: string;
      readonly googleBtn: string;
      readonly input: string;
      readonly btn: string;
    };
    readonly timingFunction: {
      readonly btn: string;
    };
    readonly breakpoints: {
      readonly mobile: string;
      readonly tablet: string;
      readonly dekstop: string;
    };
  }
}
