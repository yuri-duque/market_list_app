import {MarketStack} from "@domains/market-list";
import {AuthStack} from "@domains/user";
import {useNavigation} from "@react-navigation/native";
import {
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import {HomeScreen} from "../../screens/Home";
import {SplashScreen} from "../../screens/Splash";

export type StackRouterParamList = {
  Splash: undefined;
  Home: undefined;
  AuthStack: undefined;
  MarketList: undefined;
};

const Stack = createNativeStackNavigator<StackRouterParamList>();

export const StackRouter = () => {
  const screenOptions: NativeStackNavigationOptions = {
    headerShown: false,
  };

  return (
    <Stack.Navigator initialRouteName="Splash" screenOptions={screenOptions}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AuthStack" component={AuthStack as any} />
      <Stack.Screen name="MarketList" component={MarketStack as any} />
    </Stack.Navigator>
  );
};

export const useAppStack = () =>
  useNavigation<NativeStackNavigationProp<StackRouterParamList>>();
