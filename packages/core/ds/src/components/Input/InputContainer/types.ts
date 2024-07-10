import {AppThemeType} from "../../../theme";

export type InputVariations = keyof Pick<
  AppThemeType["colors"],
  "primary" | "danger"
>;

export type InputContainerProps = {
  variation?: InputVariations;
  disabled?: boolean;
};
