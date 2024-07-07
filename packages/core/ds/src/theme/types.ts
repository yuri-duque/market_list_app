export type ThemeType = {
  colors: {
    primary: string;
    secondary: string;
    success: string;
    danger: string;
    warning: string;
    info: string;
    light: string;
    dark: string;
    white: string;
    background: string;
  };
  fontFamily: {
    roboto: string;
    robotoBlack: string;
    robotoBold: string;
    robotoLight: string;
    robotoMedium: string;
    robotoThin: string;
  };
  fontWeight: {
    light: string;
    normal: string;
    medium: string;
    semiBold: string;
    bold: string;
    heavy: string;
  };
  fontSizes: {
    XS: number;
    S: number;
    M: number;
    L: number;
    XL: number;
    XXL: number;
  };
  sizeVariations: {
    NONE: number;
    XXS: number;
    XS: number;
    S: number;
    M: number;
    L: number;
    XL: number;
    XXL: number;
  };
};
