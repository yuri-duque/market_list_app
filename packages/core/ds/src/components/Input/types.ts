import {KeyboardTypeOptions, ReturnKeyTypeOptions} from "react-native";
import {ThemeType} from "../../theme/types";

export type InputVariations = keyof Pick<
  ThemeType["colors"],
  "primary" | "danger"
>;

export type InputSizeVariations = keyof Pick<
  ThemeType["sizeVariations"],
  "S" | "M" | "L"
>;

export type InputProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  variation?: InputVariations;
  size?: InputSizeVariations;
  disabled?: boolean;
  label?: string;
  required?: boolean;
  error?: string;

  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  returnKeyType?: ReturnKeyTypeOptions;
  onSubmitEditing?: () => void;
};
