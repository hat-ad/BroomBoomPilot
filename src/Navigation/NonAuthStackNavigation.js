import { Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Welcome,
  SignUp,
  DrivingLicense,
  GetReady,
  vehicleRC,
  AadharOrPanUpload,
  RiderDetails,
  Language,
} from "../Pages";
import { Pressable } from "react-native";
import { QuestionIcon } from "../Utility/iconLibrary";
import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  const navigation = useNavigation();
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
      <Stack.Screen name="RiderDetails" component={RiderDetails} />
      <Stack.Screen name="aadharOrPanUpload" component={AadharOrPanUpload} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen
        name="vehicleRc"
        options={{
          headerTitle: "Vehicle RC",
        }}
        component={vehicleRC}
      />
      <Stack.Screen name="GetReady" component={GetReady} />

      <Stack.Screen
        name="DrivingLicence"
        options={{
          headerTitle: "Driving License",
        }}
        component={DrivingLicense}
      />
      <Stack.Screen name="Language" component={Language} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
