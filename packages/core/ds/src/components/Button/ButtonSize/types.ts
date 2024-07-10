import {AppThemeType} from "../../../theme";

export type ButtonSizeVariations = keyof Pick<
  AppThemeType["sizeVariations"],
  "S" | "M" | "L"
>;

export type ButtonSizeProps = {
  size?: ButtonSizeVariations;
};
