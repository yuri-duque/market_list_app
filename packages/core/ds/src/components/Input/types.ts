import {ReturnKeyTypeOptions} from "react-native";
import {Masks} from "../../utils";
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
    mask?: Masks;

    returnKeyType?: ReturnKeyTypeOptions;
    onSubmitEditing?: () => void;
  };
