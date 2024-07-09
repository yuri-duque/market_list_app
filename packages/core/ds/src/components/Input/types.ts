import {KeyboardTypeOptions, ReturnKeyTypeOptions} from "react-native";
import {AppThemeType} from "../../theme/types";

export type InputVariations = keyof Pick<
  AppThemeType["colors"],
  "primary" | "danger"
>;

export type InputSizeVariations = keyof Pick<
  AppThemeType["sizeVariations"],
  "S" | "M" | "L"
>;

export type InputTypes = "default" | "numeric" | "password";

export type InputProps = {
  value: string;
  onChangeText: (text: string) => void;
  variation?: InputVariations;
  size?: InputSizeVariations;
  disabled?: boolean;
  label?: string;
  required?: boolean;
  error?: string;
  type?: InputTypes;

  returnKeyType?: ReturnKeyTypeOptions;
  onSubmitEditing?: () => void;
};
