import {AppThemeType} from "../../../theme";

export type InputSizeVariations = keyof Pick<
  AppThemeType["sizeVariations"],
  "S" | "M" | "L"
>;

export type InputSizeProps = {
  size?: InputSizeVariations;
};
