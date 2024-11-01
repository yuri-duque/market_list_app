import {Button, Text, View} from "react-native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {MarketListTotalValue} from "../../components/MarketListTotalValue";
import {ListProvider} from "../../context";
import {MarketStack} from "../stack";

function NotificationsScreen({}) {
  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Button onPress={() => {}} title="Go back home" />
    </View>
  );
}

type RootDrawerParamList = {
  Home: undefined;
  "Base products": undefined;
  Profile: undefined;
  Settings: undefined;
};
const Drawer = createDrawerNavigator<RootDrawerParamList>();

export const DrawerNavigator = () => {
  return (
    <ListProvider>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={MarketStack}
          options={{
            headerRight: () => <MarketListTotalValue />,
          }}
        />
        <Drawer.Screen name="Base products" component={NotificationsScreen} />
        <Drawer.Screen name="Profile" component={NotificationsScreen} />
        <Drawer.Screen name="Settings" component={NotificationsScreen} />
      </Drawer.Navigator>
    </ListProvider>
  );
};
