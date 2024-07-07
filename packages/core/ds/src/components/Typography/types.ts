import React from "react";
import {ThemeType} from "../../theme/types";

export type TypographyProps = {
  text: string | React.ReactNode;
  color?: keyof ThemeType["colors"];
  size?: keyof ThemeType["fontSizes"];
  weight?: keyof ThemeType["fontWeight"];
  align?: "left" | "center" | "right";
  family?: keyof ThemeType["fontFamily"];
  italic?: boolean;
};
