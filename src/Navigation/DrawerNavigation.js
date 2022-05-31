import React from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { HelpAndSupport,ContactUs, RiderDetails } from "../Pages";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        onPress={() => navigation.navigate("Notifications")}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: () => null,
      }}
    >
      <Drawer.Screen name="RiderDetails" component={RiderDetails} />
      <Drawer.Screen name="Support" component={HelpAndSupport} />
      <Drawer.Screen name="Contact" options={{headerTitle: "Contact 24x7 Help"}} component={ContactUs} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
