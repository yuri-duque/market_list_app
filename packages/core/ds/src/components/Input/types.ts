import React from "react";
import {ReturnKeyTypeOptions, TextInput} from "react-native";
import {Masks} from "../../utils";
import {IconProps} from "../Icon/types";
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
    onTouchStart?: () => void;
    textAlignVertical?: "top" | "center" | "bottom";
    iconProps?: IconProps;

    returnKeyType?: ReturnKeyTypeOptions;
    onSubmitEditing?: () => void;
  };
