import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DrivingLicense, Welcome } from "../Pages";
import { Pressable } from "react-native";
import { QuestionIcon } from "../Utility/iconLibrary";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerRight: () => (
          <Pressable
            onPress={() => console.log("press")}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <QuestionIcon color={"white"} />
            <Text style={{ color: "white", marginLeft: 5 }}>Help</Text>
          </Pressable>
        ),
        // headerTitle: () => null,
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#1F1F1F",
        },
      }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen
        name="DrivingLicence"
        options={{
          headerTitle: "Driving License",
        }}
        component={DrivingLicense}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
