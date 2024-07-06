import {NavigationContainer} from "@react-navigation/native";
import {StackRouter} from "./stack";

export const Routes = () => {
  return (
    <NavigationContainer>
      <StackRouter />
    </NavigationContainer>
  );
};
