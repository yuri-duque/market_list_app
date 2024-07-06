import {ThemeType} from "./types";

enum FontWeight {
  normal = "normal",
  bold = "bold",
  light = "100",
  medium = "500",
  semiBold = "600",
  heavy = "800",
}

enum Fonts {
  roobert = "Roobert",
}

enum FontSize {
  XS = 12,
  S = 16,
  M = 24,
  L = 32,
  XL = 40,
  XXL = 56,
}

enum SizeVariations {
  NONE = 0,
  XXS = 4,
  XS = 8,
  S = 12,
  M = 16,
  L = 24,
  XL = 32,
  XXL = 40,
}

export const ThemeDefault: ThemeType = {
  colors: {
    primary: "#007bff", // Azul
    secondary: "#6c757d", // Cinza
    success: "#28a745", // Verde
    danger: "#dc3545", // Vermelho
    warning: "#ffc107", // Amarelo
    info: "#17a2b8", // Azul claro
    light: "#f8f9fa", // Cinza claro
    dark: "#343a40", // Cinza escuro
    white: "#fff", // Branco
  },
  fontWeight: {
    light: FontWeight.light,
    normal: FontWeight.normal,
    medium: FontWeight.medium,
    semiBold: FontWeight.semiBold,
    bold: FontWeight.bold,
    heavy: FontWeight.heavy,
  },
  fonts: {
    roobert: Fonts.roobert,
  },
  fontSizes: {
    XS: FontSize.XS,
    S: FontSize.S,
    M: FontSize.M,
    L: FontSize.L,
    XL: FontSize.XL,
    XXL: FontSize.XXL,
  },
  sizeVariations: {
    NONE: SizeVariations.NONE,
    XXS: SizeVariations.XXS,
    XS: SizeVariations.XS,
    S: SizeVariations.S,
    M: SizeVariations.M,
    L: SizeVariations.L,
    XL: SizeVariations.XL,
    XXL: SizeVariations.XXL,
  },
};
