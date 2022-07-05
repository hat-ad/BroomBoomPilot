import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  HelpAndSupport,
  ReferAndEarn,
  RiderDetails,
  ContactUs,
  Faq,
  PrivacyPolicy,
  TermsAndConditions,
} from "../Pages";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import ProfileSettings from "../Pages/ProfileSettings";
import { Pressable, Text } from "react-native";
import { FileIcon, ProfileIcon } from "../Utility/iconLibrary";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerTitle: () => null,
        headerTintColor: "white",
        headerStyle: {
          paddingTop: 0,
          marginTop: 0,
          backgroundColor: "#1F1F1F",
        },
      }}
    >
      <Stack.Screen
        name="profileStack"
        component={ProfileSettings}
        options={{ headerTitle: "Profile" }}
      />
      {/* <Stack.Screen
        name="riderDetails"
        component={RiderDetails}
        options={{ headerTitle: "Rider Details" }}
      /> */}
      <Stack.Screen
        name="referAndEarn"
        component={ReferAndEarn}
        options={{ headerTitle: "Refer and Earn" }}
      />
      <Stack.Screen
        name="helpAndSupport"
        component={HelpAndSupport}
        options={{ headerTitle: "Help and Support" }}
      />
      <Stack.Screen
        name="privacyPolicy"
        component={PrivacyPolicy}
        options={{ headerTitle: "Privacy Policy" }}
      />
      <Stack.Screen
        name="termsAndConditions"
        component={TermsAndConditions}
        options={{ headerTitle: "Terms and Conditions" }}
      />
      <Stack.Screen
        name="faq"
        component={Faq}
        options={{ headerTitle: "Faq" }}
      />
    </Stack.Navigator>
  );
};

export default function BottomNavigation() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Tab.Screen
            name="RiderDetails"
            component={RiderDetails}
            options={{
              tabBarIcon: FileIcon,
              title: "Rider Details",
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileStack}
            options={{ tabBarIcon: ProfileIcon, title: "Profile" }}
          />
        </Tab.Navigator>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
