import {ThemeType} from "./types";

export const ThemeDefault: ThemeType = {
  colors: {
    primary: "#007bff", // Azul
    secondary: "#6c757d", // Cinza
    success: "#28a745", // Verde
    danger: "#fc7e7e", // Vermelho
    warning: "#ffc107", // Amarelo
    info: "#17a2b8", // Azul claro
    light: "#e3e3e3", // Cinza claro
    dark: "#343a40", // Cinza escuro
    white: "#fff", // Branco
    background: "#f2f2f2", // Cinza claro,
  },
  fontFamily: {
    roboto: "Roboto-Regular",
    robotoBlack: "Roboto-Black",
    robotoBold: "Roboto-Bold",
    robotoLight: "Roboto-Light",
    robotoMedium: "Roboto-Medium",
    robotoThin: "Roboto-Thin",
  },
  fontWeight: {
    normal: "normal",
    bold: "bold",
    light: "100",
    medium: "500",
    semiBold: "600",
    heavy: "800",
  },
  fontSizes: {
    XS: 12,
    S: 16,
    M: 24,
    L: 32,
    XL: 40,
    XXL: 56,
  },
  sizeVariations: {
    NONE: 0,
    XXS: 4,
    XS: 8,
    S: 12,
    M: 16,
    L: 24,
    XL: 32,
    XXL: 40,
  },
};
