import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  HelpAndSupport,
  ReferAndEarn,
  RiderDetails,
  ContactUs,
} from "../Pages";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Drawer.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: "#1F1F1F",
            },
          }}
        >
          <Drawer.Screen
            name="referAndEarn"
            component={ReferAndEarn}
            options={{ headerTitle: "Refer And Earn" }}
          />
          <Drawer.Screen name="RiderDetails" component={RiderDetails} />
          <Drawer.Screen name="Support" component={HelpAndSupport} />
          <Drawer.Screen name="ContactUs" component={ContactUs} />
        </Drawer.Navigator>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default DrawerNavigation;
