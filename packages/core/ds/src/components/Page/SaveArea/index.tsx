import {SafeAreaView} from "react-native-safe-area-context";

export type PageSafeAreaProps = {
  noSafeArea?: boolean;
  children: React.ReactNode;
};

export const PageSafeArea = ({noSafeArea, children}: PageSafeAreaProps) => {
  if (noSafeArea) return <>{children}</>;

  return <SafeAreaView>{children}</SafeAreaView>;
};
