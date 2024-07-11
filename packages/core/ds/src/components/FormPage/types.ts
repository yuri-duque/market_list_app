import {PageSafeAreaProps} from "./SaveArea";

export type FormPageProps = {
  noSafeArea?: PageSafeAreaProps["noSafeArea"];
  noPadding?: boolean;
  children: React.ReactNode;
  footer?: React.ReactNode;
};
