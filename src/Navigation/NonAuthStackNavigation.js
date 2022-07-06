import { Text } from "react-native";
import React, { useEffect, useRef } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Welcome,
  SignUp,
  DrivingLicense,
  GetReady,
  vehicleRC,
  AadharOrPanUpload,
  DocUpload,
  Language,
  OtpScreen,
  Approve,
  Error,
  Pending,
  SearchCity,
  ProfileDetails,
} from "../Pages";
import { Pressable } from "react-native";
import { QuestionIcon } from "../Utility/iconLibrary";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../Redux/Actions";
import Api from "../Services";

const Stack = createNativeStackNavigator();

const StackNavigation = ({ navigation }) => {
  const initialRender = useRef(true);
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth.clientToken && initialRender.current) {
      initialRender.current = false;
      getUserDetails()
        .then((res) => {
          const { data: user } = res;
          console.log(user.documents?.verification_status);
          if (!user.documents || user.documents?.verification_status === null) {
            navigation.replace("searchCity");
            return;
          } else if (user.documents?.verification_status === 0) {
            navigation.replace("pending");
            return;
          } else if (user.documents?.verification_status === -1) {
            navigation.replace("error");
            return;
          } else if (user.documents?.verification_status === 1) {
            navigation.replace("tab");
            return;
          } else if (user.documents?.verification_status === 2) {
            navigation.replace("tab");
            return;
          }
        })
        .catch((err) => {
          dispatch(
            notify({
              message: "Cannot get user details!Please try again later",
              type: "error",
            })
          );
        });
    } else {
      navigation.navigate("Welcome");
    }
  }, [auth]);

  const getUserDetails = async () => {
    try {
      const user = await Api.get("/pilot/get-user-details");
      console.log(user);

      return user;
    } catch (error) {
      return 0;
    }
  };

  return (
    <Stack.Navigator
      screenOptions={{
        // headerRight: () => (
        //   <Pressable
        //     onPress={() => console.log("press")}
        //     style={{ flexDirection: "row", alignItems: "center" }}
        //   >
        //     <QuestionIcon color={"white"} />
        //     <Text style={{ color: "white", marginLeft: 5 }}>Help</Text>
        //   </Pressable>
        // ),
        // headerTitle: () => null,
        headerTintColor: "white",
        headerStyle: {
          paddingTop: 0,
          backgroundColor: "#1F1F1F",
        },
      }}
    >
      {auth.clientToken ? (
        <>
          <Stack.Screen
            name="pending"
            options={{ header: () => null }}
            component={Pending}
          />
          <Stack.Screen
            name="error"
            options={{ header: () => null }}
            component={Error}
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
              headerTitle: "Document Upload",
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
            name="aadharOrPanUpload"
            component={AadharOrPanUpload}
          />
          <Stack.Screen
            name="profileDetails"
            component={ProfileDetails}
            options={{ headerTitle: "Profile Details" }}
          />
        </>
      ) : (
        <>
          <Stack.Screen name="Welcome" component={Welcome} />
          {/* <Stack.Screen name="Language" component={Language} /> */}
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen
            name="otp"
            options={{
              headerTitle: "OTP",
            }}
            component={OtpScreen}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigation;
