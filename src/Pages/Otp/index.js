import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import OTPTextInput from "../../Components/AppOtpInput";
import { ActivityIndicator, Button } from "react-native-paper";
import { useEffect } from "react";
import Api from "../../Services";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/Actions/authActions";
import { notify } from "../../Redux/Actions/notificationActions";
import { CommonActions } from "@react-navigation/native";

const OtpScreen = ({ navigation, route }) => {
  const [otp, setOtp] = React.useState("");
  const [isLoading, setLoading] = React.useState(false);
  const [counter, setCounter] = React.useState(60);
  const { mobile } = route.params;
  const dispatch = useDispatch();

  useEffect(() => {
    if (otp.length === 4) {
      onSubmitOtp();
    }
  }, [otp]);

  const onSubmitOtp = async () => {
    setLoading(true);
    try {
      const response = await Api.post("/pilot/verify-otp", {
        mobile: mobile,
        otp: otp,
      });

      if (response.status === 1) {
        dispatch(
          login({
            clientToken: response.data.pilot.token,
            user: response.data,
          })
        );

        const user = response.data;

        if (!user.documents || user.documents?.verification_status === null) {
          navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [
                {
                  name: user?.details?.refered_by_id
                    ? "searchCity"
                    : "addReferral",
                },
              ],
            })
          );
          return;
        } else if (user.documents?.verification_status === 0) {
          navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [{ name: "pending" }],
            })
          );
          return;
        } else if (user.documents?.verification_status === -1) {
          navigation.replace("error");
          return;
        } else if (user.documents?.verification_status === 1) {
          navigation.replace("tab");
          return;
        } else if (user.documents?.verification_status === 2) {
          navigation.replace("tab");
          return;
        }
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      dispatch(notify({ type: "error", message: error.message }));
    }
    setLoading(false);
  };

  const resendOtp = async () => {
    setLoading(true);
    try {
      const response = await Api.post("/pilot/resend-otp", {
        mobile: mobile,
      });

      if (response.status === 1) {
        setCounter(60);
        dispatch(notify({ type: "success", message: response.message }));
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      dispatch(notify({ type: "error", message: error.message }));
    }
    setLoading(false);
  };

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <View style={{ marginTop: 30, paddingHorizontal: 30 }}>
      <Text style={{ fontSize: 22, fontWeight: "700", textAlign: "center" }}>
        Enter OTP
      </Text>
      <Text style={{ fontSize: 14, fontWeight: "500", textAlign: "center" }}>
        We have sent an OTP to {mobile}
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
        {counter === 0 ? (
          <TouchableOpacity
            style={{
              backgroundColor: "#F5C001",
              padding: 10,
              borderRadius: 50,
            }}
            onPress={resendOtp}
          >
            <Text style={{ fontSize: 14, fontWeight: "500" }}>Resend OTP</Text>
          </TouchableOpacity>
        ) : (
          <Text style={{ fontSize: 14, fontWeight: "500", textAlign: "left" }}>
            Resend OTP in {counter}s
          </Text>
        )}
        {isLoading && (
          <View style={{ flexDirection: "row" }}>
            <ActivityIndicator animating={true} color={"red"} />
            <Text style={{ fontSize: 14, fontWeight: "500", marginLeft: 10 }}>
              Auto verifying
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default OtpScreen;
