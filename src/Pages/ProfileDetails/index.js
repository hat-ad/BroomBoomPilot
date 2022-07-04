import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { RadioButton, TextInput } from "react-native-paper";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import moment from "moment";
import Api from "../../Services";
import { useDispatch } from "react-redux";
import { notify, updateUser } from "../../Redux/Actions/";

const ProfileDetails = ({ navigation }) => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [dob, setDob] = useState("");
  const [dobError, setDobError] = useState("");
  const [gender, setGender] = useState("");
  const [genderError, setGenderError] = useState("");

  const handleSubmit = () => {
    var firstNameValid = false;
    if (firstName.length == 0) {
      setFirstNameError("First name is required");
    } else {
      setFirstNameError("");
      firstNameValid = true;
    }

    var lastNameValid = false;
    if (lastName.length == 0) {
      setLastNameError("last name is required");
    } else {
      setLastNameError("");
      lastNameValid = true;
    }

    var emailValid = false;
    if (email.length == 0) {
      setEmailError("email is required");
    } else {
      setEmailError("");
      emailValid = true;
    }

    var dobValid = false;
    if (dob.length == 0) {
      setDobError("dob is required");
    } else {
      setDobError("");
      dobValid = true;
    }

    var genderValid = false;
    if (gender.length == 0) {
      setGenderError("gender is required");
    } else {
      setGenderError("");
      genderValid = true;
    }

    if (
      firstNameValid &&
      lastNameValid &&
      emailValid &&
      dobValid &&
      genderValid
    ) {
      alert("Email: " + email);
      setFirstName("");
      setLastName("");
      setEmail("");
      setDob("");
      setGender("");
    }
  };
  const radioButtonsData = [
    {
      id: "1",
      label: "Male",
      value: "male",
    },
    {
      id: "2",
      label: "Female",
      value: "female",
    },
  ];

  const [date, setDate] = useState(null);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date || new Date(),
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const onSubmit = async () => {
    try {
      const payload = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        dob: moment(date),
        gender: gender,
      };
      console.log(payload);
      const response = await Api.update("/pilot/update-pilot-details", payload);
      if (response.staus === 1) {
        dispatch(updateUser(response.data));
        navigation.navigate("docUpload");
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      console.log(error);
      dispatch(notify({ type: "error", message: error.message }));
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>First Name</Text>
        <TextInput
          mode="outlined"
          placeholder="Enter First Name"
          onChangeText={(text) => setFirstName(text)}
          value={firstName}
          error={firstNameError.length > 0}
          style={styles.input}
        />
        {firstNameError.length > 0 && (
          <Text style={styles.error}>{firstNameError}</Text>
        )}
      </View>
      <View style={styles.row}>
        <Text style={styles.title}>Last Name</Text>
        <TextInput
          mode="outlined"
          placeholder="Enter Last Name"
          onChangeText={(text) => setLastName(text)}
          value={lastName}
          error={lastNameError.length > 0}
          style={styles.input}
        />
        {lastNameError.length > 0 && (
          <Text style={styles.error}>{lastNameError}</Text>
        )}
      </View>
      <View style={styles.row}>
        <Text style={styles.title}>DOB</Text>
        <TouchableWithoutFeedback onPress={showDatepicker}>
          <View
            style={[
              styles.datePickerContainer,
              dobError.length > 0 && { borderColor: "red" },
            ]}
          >
            <Text
              style={
                date ? { color: "black", fontSize: 16 } : styles.datePickerText
              }
            >
              {date ? moment(date).format("DD/mm/yyyy") : "Select Date"}
            </Text>
          </View>
          {/* <TextInput
            mode="outlined"
            placeholder="Enter Date of Birth"
            onChangeText={(text) => setDob(text)}
            value={dob}
            error={dobError.length > 0}
            disabled={true}
          /> */}
        </TouchableWithoutFeedback>
        {dobError.length > 0 && <Text style={styles.error}>{dobError}</Text>}
      </View>
      <View style={styles.row}>
        <Text style={styles.title}>Email</Text>
        <TextInput
          mode="outlined"
          placeholder="Enter Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
          error={emailError.length > 0}
          style={styles.input}
        />
        {emailError.length > 0 && (
          <Text style={styles.error}>{emailError}</Text>
        )}
      </View>
      <View style={styles.row}>
        <Text style={styles.title}>Gender</Text>

        <RadioButton.Group
          onValueChange={(value) => setGender(value)}
          value={gender}
        >
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginRight: 30,
              }}
            >
              <RadioButton value="male" />
              <Text>Male</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <RadioButton value="female" />
              <Text>Female</Text>
            </View>
          </View>
        </RadioButton.Group>
        {genderError.length > 0 && (
          <Text style={styles.error}>{genderError}</Text>
        )}
      </View>
      <View style={styles.submit}>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={{ textAlign: "center" }}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProfileDetails;
