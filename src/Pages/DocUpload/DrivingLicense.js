import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { AppDocumentPicker } from "../../Components";
import styles from "./styles";
import { DeleteIcon } from "../../Utility/iconLibrary";
import Api from "../../Services";
import { useDispatch } from "react-redux";
import { notify } from "../../Redux/Actions/notificationActions";

const DrivingLicense = ({ navigation }) => {
  const [licenseCreds, setLicenseCreds] = useState({
    licenseNumber: "",
    front: "",
    back: "",
  });

  const dispatch = useDispatch();
  const onDocumentPicked = (type, uri) => {
    if (type === "FRONT") {
      setLicenseCreds({
        ...licenseCreds,
        front: uri,
      });
    } else if (type === "BACK") {
      setLicenseCreds({
        ...licenseCreds,
        back: uri,
      });
    }
  };

  const onSubmit = async () => {
    try {
      const response = await Api.post("auth/driving-license", licenseCreds);
      if (response.ack) {
        navigation.navigate("vehicleRc");
        dispatch(notify({ type: "success", message: response.message }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Upload Driving License Image</Text>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.title}>Front</Text>
        <Text style={styles.muted}>Supported files PDF, JPG, PNG</Text>
        <View style={styles.uploadContainer}>
          <AppDocumentPicker
            title={"upload"}
            onDocumentPicked={(e) => onDocumentPicked("FRONT", e)}
            buttonStyle={styles.pickerButton}
            containerStyle={styles.pickerContainer}
          />
          <Text style={{ fontSize: 16, marginRight: 5, fontWeight: "600" }}>
            image1.jpg
          </Text>
          <TouchableOpacity style={{ marginLeft: 20 }}>
            <DeleteIcon />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.title}>Back</Text>
        <Text style={styles.muted}>Supported files PDF, JPG, PNG</Text>
        <View style={styles.uploadContainer}>
          <AppDocumentPicker
            title={"upload"}
            onDocumentPicked={(e) => onDocumentPicked("BACK", e)}
            buttonStyle={styles.pickerButton}
            containerStyle={styles.pickerContainer}
          />
          <Text style={{ fontSize: 16, marginRight: 5, fontWeight: "600" }}>
            image1.jpg
          </Text>
          <TouchableOpacity style={{ marginLeft: 20 }}>
            <DeleteIcon />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          marginTop: 30,
        }}
      >
        <Text style={styles.heading}>Enter Driving Licence number</Text>
        <TextInput
          placeholder="Enter DL number"
          mode="outlined"
          onChangeText={(e) =>
            setLicenseCreds({ ...licenseCreds, licenseNumber: e })
          }
        />
      </View>
      <TouchableOpacity style={styles.submit} onPress={onSubmit}>
        <Text style={styles.centerText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DrivingLicense;
