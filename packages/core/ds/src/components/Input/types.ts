import React from "react";
import {ReturnKeyTypeOptions, TextInput} from "react-native";
import {Masks} from "../../utils";
import {InputContainerProps} from "./InputContainer/types";
import {InputSizeProps} from "./InputSize/types";
import { IconProps } from "../Icon/types";

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
    iconProps?: IconProps;

    returnKeyType?: ReturnKeyTypeOptions;
    onSubmitEditing?: () => void;
  };
