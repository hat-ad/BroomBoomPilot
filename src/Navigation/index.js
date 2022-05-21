import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import DrawerNavigation from "./DrawerNavigation";
import NonAuthStackNavigation from "./NonAuthStackNavigation";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="Drawer"
        component={DrawerNavigation}
        options={{
          header: () => null,
        }}
      /> */}
      <Stack.Screen
        name="nonAuthStack"
        component={NonAuthStackNavigation}
        options={{
          header: () => null,
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
