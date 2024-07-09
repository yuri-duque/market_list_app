import {AppThemeType} from "../../theme/types";
import {TypographyProps} from "../Typography/types";

type TextProps = Omit<TypographyProps, "text">;

export type ButtonVariations = "contained" | "outlined";

export type ButtonColors = keyof AppThemeType["colors"];

export type ButtonSizeVariations = keyof Pick<
  AppThemeType["sizeVariations"],
  "S" | "M" | "L"
>;

export type ButtonProps = {
  text: string;
  textProps?: TextProps;
  onPress: () => void;
  color?: ButtonColors;
  variation?: ButtonVariations;
  size?: ButtonSizeVariations;
  disabled?: boolean;
};
