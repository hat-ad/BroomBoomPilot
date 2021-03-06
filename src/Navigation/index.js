import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails, notify } from "../Redux/Actions";
import Api from "../Services";
import BottomNavigation from "./BottomNavigation";
import NonAuthStackNavigation from "./NonAuthStackNavigation";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator>
      <>
        <Stack.Screen
          name="nonAuthStack"
          component={NonAuthStackNavigation}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen
          name="tab"
          component={BottomNavigation}
          options={{
            header: () => null,
          }}
        />
      </>
    </Stack.Navigator>
  );
};

export default Navigation;
