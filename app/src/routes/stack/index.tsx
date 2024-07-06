import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {StackRouterParamList} from "./types";
import {HomeScreen} from "../../screens/Home";
import {SplashScreen} from "../../screens/Splash";

const Stack = createNativeStackNavigator<StackRouterParamList>();

export const StackRouter = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerBackVisible: false, headerTitle: ""}}
      />
    </Stack.Navigator>
  );
};
