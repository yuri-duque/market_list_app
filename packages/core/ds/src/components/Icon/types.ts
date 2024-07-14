import {AppThemeType} from "../../theme";

export type IconProps = {
  name: string;
  size?: keyof AppThemeType["sizeVariations"];
  color?: keyof AppThemeType["colors"];
};
