import React, { useState } from "react";
import { View, Text, Button, Linking } from "react-native";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
import styles from "./styles";
const SignUp = () => {
  const [state, setState] = useState(0);
  return (
    <View>
      <View>
        <Text style={styles.text}>Enter Your Mobile Number</Text>
        <Text style={styles.text}>Otp will be sent to this number</Text>
      </View>
      {/* <PhoneInput country={"us"} /> */}
      <View>
        <Text>
          By continuing,you agree to the
          <Text style={{ color: "blue" }} onPress={() => Linking.openURL("#")}>
            {" "}
            terms{" "}
          </Text>
          and
          <Text style={{ color: "blue" }} onPress={() => Linking.openURL("#")}>
            {" "}
            privacy policy{" "}
          </Text>
          of Broom Broom Pilot
        </Text>
      </View>
      <Button title="Send OTP" />
    </View>
  );
};

export default SignUp;
