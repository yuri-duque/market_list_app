import {SafeAreaView} from "react-native-safe-area-context";

export const Page = ({children}: PageProps) => {
  return <SafeAreaView>{children}</SafeAreaView>;
};
