import {TypographyProps} from "../Typography/types";
import {ButtoncontainerProps} from "./ButtonContainer/types";
import {ButtonSizeProps} from "./ButtonSize/types";

type TextProps = Omit<TypographyProps, "text">;

export type ButtonProps = ButtoncontainerProps &
  ButtonSizeProps & {
    text: string;
    textProps?: TextProps;
  };
