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
  DocUpload,
  Language,
  OtpScreen,
  HelpAndSupport,
  Approve,
  Error,
  Pending,
  SearchCity,
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
          paddingTop: 0,
          backgroundColor: "#1F1F1F",
        },
      }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Language" component={Language} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen
        name="otp"
        options={{
          headerTitle: "OTP",
        }}
        component={OtpScreen}
      />
      <Stack.Screen
        name="searchCity"
        component={SearchCity}
        options={{ headerTitle: "Search City" }}
      />
      <Stack.Screen
        name="GetReady"
        options={{
          headerTitle: "",
        }}
        component={GetReady}
      />
      <Stack.Screen
        name="docUpload"
        options={{
          headerTitle: "",
        }}
        component={DocUpload}
      />
      <Stack.Screen
        name="drivingLicense"
        options={{ headerTitle: "Driving License" }}
        component={DrivingLicense}
      />
      <Stack.Screen
        name="vehicleRc"
        options={{ headerTitle: "Vehicle RC" }}
        component={vehicleRC}
      />
      <Stack.Screen
        name="adhaar"
        options={{ headerTitle: "Adhaar Or Pan Upload" }}
        component={AadharOrPanUpload}
      />
      <Stack.Screen
        name="pending"
        options={{ headerTitle: "" }}
        component={Pending}
      />
      <Stack.Screen name="RiderDetails" component={RiderDetails} />
      <Stack.Screen name="aadharOrPanUpload" component={AadharOrPanUpload} />
      <Stack.Screen name="approve" component={Approve} />
      <Stack.Screen name="error" component={Error} />
      <Stack.Screen name="helpAndSupport" component={HelpAndSupport} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
