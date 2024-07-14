import React from "react";
import {AppThemeType} from "../../theme/types";

export type TypographyProps = {
  text: string | React.ReactNode;
  color?: keyof AppThemeType["colors"];
  size?: keyof AppThemeType["fontSizes"];
  weight?: keyof AppThemeType["fontWeight"];
  align?: "left" | "center" | "right";
  family?: keyof AppThemeType["fontFamily"];
  italic?: boolean;
  decotarion?: "none" | "underline" | "line-through";
};
