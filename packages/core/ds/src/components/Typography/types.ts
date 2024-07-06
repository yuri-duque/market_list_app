import {ThemeType} from "../../theme/types";

export type TypographyProps = {
  text: string;
  color?: keyof ThemeType["colors"];
  size?: keyof ThemeType["fontSizes"];
  weight?: keyof ThemeType["fontWeight"];
  align?: "left" | "center" | "right";
};
