import {PageSafeAreaProps} from "./SaveArea";

export type PageProps = {
  noSafeArea?: PageSafeAreaProps["noSafeArea"];
  noPadding?: boolean;
  children: React.ReactNode;
  footer?: React.ReactNode;
};
