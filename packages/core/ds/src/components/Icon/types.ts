import {AppThemeType} from "../../theme";

export type IconProps = {
  name: string;
  iconSize?: keyof AppThemeType["sizeVariations"];
  color?: keyof AppThemeType["colors"];
};
