import {IconProps} from "../Icon/types";
import {TypographyProps} from "../Typography/types";
import {ButtoncontainerProps} from "./ButtonContainer/types";
import {ButtonSizeProps} from "./ButtonSize/types";

type TextProps = Omit<TypographyProps, "text">;
type ButtonIconProps = Omit<IconProps, "name">;

export type ButtonProps = ButtoncontainerProps &
  ButtonSizeProps & {
    text: string;
    textProps?: TextProps;
    icon?: string;
    iconProps?: ButtonIconProps;
  };
