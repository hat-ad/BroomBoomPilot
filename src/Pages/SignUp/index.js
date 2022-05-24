import React, { useRef } from "react";
import { View, Text, Button, Linking, TouchableOpacity } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import styles from "./styles";
const SignUp = () => {
  const inputRef = useRef(null);
  return (
    <View
      style={{
        paddingHorizontal: 30,
        justifyContent: "space-between",
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          marginTop: 35,
        }}
      >
        <Text
          style={{
            fontSize: 22,
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          Enter Your Mobile Number
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
            textAlign: "center",
            marginBottom: 35,
          }}
        >
          Otp will be sent to this number
        </Text>

        <PhoneInput
          ref={inputRef}
          initialCountry="in"
          autoFormat={true}
          autoFocus
          placeholder="Enter phone number"
          containerStyle={{
            backgroundColor: "#fff",
            width: "100%",
            borderRadius: 5,
            borderWidth: 1,
          }}
          textContainerStyle={{
            backgroundColor: "#fff",
            borderRadius: 5,
          }}
        />
      </View>
      <View
        style={{
          marginBottom: 30,
        }}
      >
        <Text style={{ textAlign: "center", marginBottom: 15 }}>
          By continuing,you agree to the{" "}
          <Text style={{ color: "blue" }} onPress={() => Linking.openURL("#")}>
            terms{" "}
          </Text>
          and{" "}
          <Text style={{ color: "blue" }} onPress={() => Linking.openURL("#")}>
            privacy policy{" "}
          </Text>
          of Broom Boom Pilot
        </Text>
        <TouchableOpacity
          style={{
            width: "100%",
            padding: 10,
            borderWidth: 1,
            borderRadius: 50,
          }}
        >
          <Text style={{ textAlign: "center" }}>Send OTP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;
