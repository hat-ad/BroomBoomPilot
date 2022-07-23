import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import metrics from "../../Utility/metrics";

const ProfileSettings = ({ navigation }) => {
  return (
    <View style={{ paddingHorizontal: metrics.scale(30) }}>
      {/* <TouchableOpacity
        style={{ paddingVertical: metrics.verticalScale(20) }}
        onPress={() => navigation.navigate("riderDetails")}
      >
        <Text style={{ fontSize: 16 }}>Rider Details</Text>
      </TouchableOpacity> */}
      <TouchableOpacity
        style={{ paddingVertical: metrics.verticalScale(20) }}
        onPress={() => navigation.navigate("RiderDetails")}
      >
        <Text style={{ fontSize: 16 }}>My Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ paddingVertical: metrics.verticalScale(20) }}
        onPress={() => navigation.navigate("helpAndSupport")}
      >
        <Text style={{ fontSize: 16 }}>Help and Support</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ paddingVertical: metrics.verticalScale(20) }}
        onPress={() => navigation.navigate("privacyPolicy")}
      >
        <Text style={{ fontSize: 16 }}>Privacy Policy</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ paddingVertical: metrics.verticalScale(20) }}
        onPress={() => navigation.navigate("termsAndConditions")}
      >
        <Text style={{ fontSize: 16 }}>Terms And Conditions</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileSettings;
