import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
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
const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Tab.Navigator>
          <Tab.Screen name="RiderDetails" component={RiderDetails} />
          <Tab.Screen name="ReferAndEarn" component={ReferAndEarn} />
        </Tab.Navigator>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
