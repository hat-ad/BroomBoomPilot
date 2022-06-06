import { View, Text } from "react-native";
import React from "react";
import OTPTextInput from "../../Components/AppOtpInput";
import { ActivityIndicator, Button } from "react-native-paper";
import { useEffect } from "react";
import Api from "../../Services";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/Actions/authActions";
import { notify } from "../../Redux/Actions/notificationActions";
const OtpScreen = ({ navigation, route }) => {
  const [otp, setOtp] = React.useState("");
  const [isLoading, setLoading] = React.useState(false);
  const { email } = route.params;
  const dispatch = useDispatch();

  useEffect(() => {
    if (otp.length === 4) {
      console.log("here");
      onSubmitOtp();
    }
  }, [otp]);

  const onSubmitOtp = async () => {
    setLoading(true);
    try {
      console.log("email", email);
      const response = await Api.post("auth/signup", {
        email: email,
        otp: otp,
      });
      // console.log(response);
      if (response.ack) {
        console.log(response.token);
        dispatch(login({ clientToken: response.token }));
        navigation.navigate("docUpload");
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      dispatch(notify({ type: "error", message: error.message }));
    }
    setLoading(false);
  };

  return (
    <View style={{ marginTop: 30, paddingHorizontal: 30 }}>
      <Text style={{ fontSize: 22, fontWeight: "700", textAlign: "center" }}>
        Enter OTP
      </Text>
      <Text style={{ fontSize: 14, fontWeight: "500", textAlign: "center" }}>
        We have sent an OTP to 8961458521
      </Text>
      <OTPTextInput inputCount={4} handleTextChange={(e) => setOtp(e)} />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
          width: "100%",
        }}
      >
        {isLoading && (
          <>
            <ActivityIndicator animating={true} color={"red"} />
            <Text style={{ fontSize: 14, fontWeight: "500" }}>
              Auto verifying
            </Text>
          </>
        )}
        <Text style={{ fontSize: 14, fontWeight: "500", textAlign: "right" }}>
          Resend OTP in 10s
        </Text>
      </View>
    </View>
  );
};

export default OtpScreen;
