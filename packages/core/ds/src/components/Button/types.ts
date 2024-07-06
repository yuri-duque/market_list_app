import {TypographyProps} from "../Typography/types";

type TextProps = Omit<TypographyProps, "text">;

export type ButtonVariations =
  | "primary"
  | "danger"
  | "secondary"
  | "success"
  | "warning"
  | "info"
  | "light"
  | "dark"
  | "white";

export type ButtonSizeVariations = "S" | "M" | "L";

export type ButtonProps = {
  text: string;
  textProps?: TextProps;
  onPress: () => void;
  variation?: ButtonVariations;
  size?: ButtonSizeVariations;
  disabled?: boolean;
};
