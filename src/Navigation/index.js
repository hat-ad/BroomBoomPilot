import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { useSelector } from "react-redux";
import DrawerNavigation from "./DrawerNavigation";
import NonAuthStackNavigation from "./NonAuthStackNavigation";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const auth = useSelector((state) => state.auth);
  console.log("auth", auth);
  return (
    <Stack.Navigator>
      {auth.clientToken ? (
        <Stack.Screen
          name="Drawer"
          component={DrawerNavigation}
          options={{
            header: () => null,
          }}
        />
      ) : (
        <Stack.Screen
          name="nonAuthStack"
          component={NonAuthStackNavigation}
          options={{
            header: () => null,
          }}
        />
      )}
    </Stack.Navigator>
  );
};

export default Navigation;
