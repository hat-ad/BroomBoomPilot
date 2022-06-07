import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  HelpAndSupport,
  ReferAndEarn,
  RiderDetails,
  ContactUs,
} from "../Pages";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const SupportStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#1F1F1F",
        },
        headerTintColor: "white",

        headerTitle: "Help and Support",
      }}
    >
      <Stack.Screen
        name="support"
        options={{
          headerTitle: "Help and Support",
        }}
        component={HelpAndSupport}
      />
      {/* <Stack.Screen name="faq" component={FAQs} /> */}
      {/* <Stack.Screen name="payment" component={Payment} /> */}
      <Stack.Screen
        name="contact"
        options={{
          headerTitle: "Contact Us",
        }}
        component={ContactUs}
      />
    </Stack.Navigator>
  );
};

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
          {/* <Drawer.Screen
            name="Support"
            options={{
              header: () => null,
            }}
            component={SupportStack}
          /> */}
          <Drawer.Screen
            name="support"
            options={{
              headerTitle: "Help and Support",
            }}
            component={HelpAndSupport}
          />
          <Drawer.Screen name="ContactUs" component={ContactUs} />
        </Drawer.Navigator>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default DrawerNavigation;
