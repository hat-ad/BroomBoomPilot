import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import styles from "./styles";

const ProfileDetails = () => {
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

  const [radioButtons, setRadioButtons] = useState("male");
  const setValue = (value) => {
    var newArray = value.filter((item) => item.selected === true);
    setRadioButtons(newArray[0].value);
  };

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
      setDobError("dob name is required");
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
  return (
    <SafeAreaView>
      <Text style={styles.text}>First Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter First Name"
        keyboardType="string"
        onChangeText={(text) => setFirstName(text)}
        value={firstName}
      />
      {firstNameError.length > 0 && <Text>{firstNameError}</Text>}
      <Text style={styles.text}>Last Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Last Name"
        keyboardType="string"
        onChangeText={(text) => setLastName(text)}
        value={lastName}
      />
      {lastNameError.length > 0 && <Text>{lastNameError}</Text>}
      <Text style={styles.text}>Date of Birth</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Date of Birth"
        keyboardType="string"
        onChangeText={(text) => setDob(text)}
        value={dob}
      />
      {dobError.length > 0 && <Text>{dobError}</Text>}
      <Text style={styles.text}>Email Id</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Email Id"
        keyboardType="string"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      {emailError.length > 0 && <Text>{emailError}</Text>}
      <Text>Gender</Text>
      {/* <RadioGroup
        radioButtons={radioButtonsData}
        onPress={(value) => setValue(value)}
        style={styles.radio}
      /> */}
      {genderError.length > 0 && <Text>{genderError}</Text>}
      <View style={styles.countContainer}></View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ProfileDetails;
