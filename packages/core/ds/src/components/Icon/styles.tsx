import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import styled from "styled-components";
import {IconProps} from "./types";

export const Icon = styled(MaterialIcon)<Pick<IconProps, "size" | "color">>`
  color: ${({theme, color}) => theme.colors[color || "dark"]};
  font-size: ${({theme, size}) => theme.sizeVariations[size || "M"]}px;
`;
