import {KeyboardTypeOptions, ReturnKeyTypeOptions} from "react-native";
import {AppThemeType} from "../../theme/types";
import {InputContainerProps} from "./InputContainer/types";
import {InputSizeProps} from "./InputSize/types";

export type InputTypes = "default" | "numeric" | "password";

export type InputProps = InputContainerProps &
  InputSizeProps & {
    value: string;
    onChangeText: (text: string) => void;
    label?: string;
    required?: boolean;
    error?: string;
    type?: InputTypes;

    returnKeyType?: ReturnKeyTypeOptions;
    onSubmitEditing?: () => void;
  };
