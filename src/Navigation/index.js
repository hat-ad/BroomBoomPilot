import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { useSelector } from "react-redux";
import BottomNavigation from "./BottomNavigation";
import NonAuthStackNavigation from "./NonAuthStackNavigation";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const auth = useSelector((state) => state.auth);
  return (
    <Stack.Navigator>
      {auth.user.isVerified && auth.clientToken && (
        <Stack.Screen
          name="Drawer"
          component={BottomNavigation}
          options={{
            header: () => null,
          }}
        />
      )}
      <Stack.Screen
        name="nonAuthStack"
        component={NonAuthStackNavigation}
        options={{
          header: () => null,
        }}
      />

      {auth.user.isVerified && auth.clientToken && (
        <Stack.Screen
          name="Drawer"
          component={BottomNavigation}
          options={{
            header: () => null,
          }}
        />
      )}
    </Stack.Navigator>
  );
};

export default Navigation;
