import React, { useRef, useState } from "react";
import { View, Text, Button, Linking, TouchableOpacity } from "react-native";
import { TextInput, ActivityIndicator, Checkbox } from "react-native-paper";
import PhoneInput from "react-native-phone-number-input";
import { useDispatch } from "react-redux";
import { notify } from "../../Redux/Actions/notificationActions";
import Api from "../../Services";
import styles from "./styles";
const SignUp = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({
    email: "",
    mobile: "",
  });

  const [checked, setChecked] = useState(true);

  const onSubmit = async () => {
    setIsLoading(true);

    try {
      const response = await Api.post(`/pilot/register`, {
        mobile: credentials.mobile,
      });
      if (response.status === 1) {
        dispatch(notify({ type: "success", message: response.message }));
        navigation.navigate("otp", { mobile: credentials.mobile });
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      dispatch(notify({ type: "error", message: error.message }));
    }
    setIsLoading(false);
  };

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
          onChangeText={(text) =>
            setCredentials({ ...credentials, mobile: text })
          }
        />
        {/* <Text style={{ textAlign: "center", marginVertical: 10 }}>Or</Text>
        <TextInput
          label="Email"
          onChangeText={(text) =>
            setCredentials({ ...credentials, email: text })
          }
          style={{ backgroundColor: "#fff" }}
        /> */}
      </View>
      <View
        style={{
          marginBottom: 30,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Checkbox
            status={checked ? "checked" : "unchecked"}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <Text style={{ marginBottom: 15, textAlign: "auto" }}>
            By continuing,you agree to the
            <Text
              style={{ color: "blue" }}
              onPress={() => Linking.openURL("#")}
            >
              terms
            </Text>
            & conditions
            <Text
              style={{ color: "blue" }}
              onPress={() => Linking.openURL("#")}
            >
              and privacy policy
            </Text>
            of BroomBoom Pilot
          </Text>
        </View>
        <TouchableOpacity
          style={{
            width: "100%",
            padding: 10,
            borderWidth: 1,
            borderRadius: 50,
            backgroundColor:
              !checked || !credentials.mobile || isLoading ? "#ddd" : "#fff",
          }}
          disabled={!checked || !credentials.mobile || isLoading}
          onPress={onSubmit}
        >
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <Text style={{ textAlign: "center" }}>Send OTP</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;
