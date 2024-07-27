import {Edges, SafeAreaView} from "react-native-safe-area-context";

export type PageSafeAreaProps = {
  noSafeArea?: boolean;
  children: React.ReactNode;
  hasHeader?: boolean;
  hasFooter?: boolean;
};

export const PageSafeArea = ({
  noSafeArea,
  children,
  hasHeader,
  hasFooter,
}: PageSafeAreaProps) => {
  if (noSafeArea) return <>{children}</>;

  const edges: Edges = {
    top: hasHeader ? "off" : "additive",
    bottom: hasFooter ? "off" : "additive",
  };

  return <SafeAreaView edges={edges}>{children}</SafeAreaView>;
};
