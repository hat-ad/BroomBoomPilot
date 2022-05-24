import { View, Text } from "react-native";
import React, { useRef } from "react";
import OTPTextInput from "../../Components/AppOtpInput";
const OtpScreen = () => {
  return (
    <View style={{ marginTop: 30, paddingHorizontal: 30 }}>
      <Text style={{ fontSize: 22, fontWeight: "700", textAlign: "center" }}>
        Enter OTP
      </Text>
      <Text style={{ fontSize: 14, fontWeight: "500", textAlign: "center" }}>
        We have sent an OTP to 8961458521
      </Text>
      <OTPTextInput inputCount={4} handleTextChange={(e) => console.log(e)} />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <Text style={{ fontSize: 14, fontWeight: "500" }}>Auto verifying</Text>
        <Text style={{ fontSize: 14, fontWeight: "500" }}>
          Resend OTP in 10s
        </Text>
      </View>
    </View>
  );
};

export default OtpScreen;
