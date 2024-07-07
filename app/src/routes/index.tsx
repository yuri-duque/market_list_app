import {SafeAreaProvider} from "react-native-safe-area-context";
import {NavigationContainer} from "@react-navigation/native";
import {StackRouter} from "./stack";

export const Routes = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StackRouter />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
