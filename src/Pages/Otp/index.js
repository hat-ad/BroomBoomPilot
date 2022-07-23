import { View, Text } from "react-native";
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
        {isLoading && (
          <>
            <ActivityIndicator animating={true} color={"red"} />
            <Text style={{ fontSize: 14, fontWeight: "500" }}>
              Auto verifying
            </Text>
          </>
        )}
        {/* <Text style={{ fontSize: 14, fontWeight: "500", textAlign: "right" }}>
          Resend OTP in 10s
        </Text> */}
      </View>
    </View>
  );
};

export default OtpScreen;
