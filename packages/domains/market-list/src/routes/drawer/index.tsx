import {Button, View} from "react-native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {NavigationContainer, useNavigation} from "@react-navigation/native";

function HomeScreen({}) {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Button onPress={() => {}} title="Go to notifications" />
    </View>
  );
}

function NotificationsScreen({}) {
  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Button onPress={() => {}} title="Go back home" />
    </View>
  );
}

type RootDrawerParamList = {
  Home: undefined;
  Settings: undefined;
};
const Drawer = createDrawerNavigator<RootDrawerParamList>();

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Settings" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default DrawerNavigator;
