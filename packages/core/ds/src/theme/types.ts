export type AppThemeType = {
  colors: {
    primary: string;
    secondary: string;
    success: string;
    lightSuccess: string;
    danger: string;
    warning: string;
    info: string;
    light: string;
    dark: string;
    white: string;
    background: string;
  };
  opacity: {
    black15: string;
    black30: string;
    black45: string;
    black60: string;
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
    XXXS: number;
    XXS: number;
    XS: number;
    S: number;
    M: number;
    XM: number;
    L: number;
    XL: number;
    XXL: number;
    XXXL: number;
  };
};
