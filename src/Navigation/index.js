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
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const navigation = useNavigation();
  useEffect(() => {
    // dispatch(getUserDetails());
    if (auth.clientToken) {
      console.log("I landed here index");
      // navigation.navigate("searchCity");

      getUserDetails()
        .then((res) => {
          const { data: user } = res;
          if (!user.documents || user.documents?.verification_status === null) {
            console.log(
              "auth",
              !user.documents || !user.documents?.verification_status !== null
            );
            navigation.navigate("searchCity");
            return;
          } else if (user.documents?.verification_status === 0) {
            navigation.navigate("pending");
            return;
          } else if (user.documents?.verification_status === -1) {
            navigation.navigate("error");
            return;
          } else if (user.documents?.verification_status === 1) {
            navigation.navigate("tab");
            return;
          } else if (user.documents?.verification_status === 2) {
            navigation.navigate("tab");
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
  }, []);

  const getUserDetails = async () => {
    try {
      const user = await Api.get("/pilot/get-user-details");
      return user;
    } catch (error) {
      return 0;
    }
  };

  return (
    <Stack.Navigator>
      {/* {auth.user?.documents?.verification_status === 1 && auth.clientToken ? ( */}

      {/* // ) : ( */}
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
      {/* // )} */}
    </Stack.Navigator>
  );
};

export default Navigation;
