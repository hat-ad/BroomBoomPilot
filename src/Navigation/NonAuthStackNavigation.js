import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Welcome, Language, SignUp } from "../Pages";
import { Pressable } from "react-native";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      defaultScreenOptions={{
        headerRight: () => (
          <Pressable onPress={() => console.log("press")}>
            <Text>Help</Text>
          </Pressable>
        ),
      }}
    >
      {/* <Stack.Screen name="Welcome" component={Welcome} /> */}
      {/* <Stack.Screen name="Language" component={Language} /> */}
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
