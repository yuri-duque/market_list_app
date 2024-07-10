import {AppThemeType} from "../../../theme";

export type ButtonVariations = "contained" | "outlined";

export type ButtonColors = keyof Pick<
  AppThemeType["colors"],
  "primary" | "secondary" | "success" | "danger"
>;

export type ButtoncontainerProps = {
  onPress: () => void;
  color?: ButtonColors;
  variation?: ButtonVariations;
  disabled?: boolean;
  rounded?: boolean;
};
