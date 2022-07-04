import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../Redux/Actions";
import BottomNavigation from "./BottomNavigation";
import NonAuthStackNavigation from "./NonAuthStackNavigation";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    console.log(
      " auth.user.documents.verification_status",
      auth.user.documents
    );
    auth.clientToken &&
      auth.user.documents.verification_status === 0 &&
      dispatch(getUserDetails());
  }, []);
  return (
    <Stack.Navigator>
      {auth.user?.documents?.verification_status === 1 && auth.clientToken && (
        <Stack.Screen
          name="tab"
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
    </Stack.Navigator>
  );
};

export default Navigation;
