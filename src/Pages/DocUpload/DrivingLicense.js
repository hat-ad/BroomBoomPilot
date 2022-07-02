import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { AppDocumentPicker } from "../../Components";
import styles from "./styles";
import { DeleteIcon } from "../../Utility/iconLibrary";
import Api from "../../Services";
import { useDispatch } from "react-redux";
import { notify } from "../../Redux/Actions/notificationActions";
import metrics from "../../Utility/metrics";

const DrivingLicense = ({ navigation }) => {
  const [isChoosenFrontFile, setIsChoosenFrontFile] =
    useState("No choosen file");
  const [isChoosenBackFile, setIsChoosenBackFile] = useState("No choosen file");

  const [licenseCreds, setLicenseCreds] = useState({
    licenseNumber: "",
    front: "",
    back: "",
  });

  const dispatch = useDispatch();
  const onDocumentPicked = (type, doc) => {
    if (!doc.uri) return;
    setIsChoosenFrontFile(doc.name);
    if (type === "FRONT") {
      setLicenseCreds({
        ...licenseCreds,
        front: doc.uri,
      });
    } else if (type === "BACK") {
      setLicenseCreds({
        ...licenseCreds,
        back: doc.uri,
      });
    }
  };

  const onSubmit = async () => {
    // try {
    //   console.log(licenseCreds);
    //   const response = await Api.post("auth/driving-license", licenseCreds);
    //   if (response.status === 1) {
    //     navigation.navigate("vehicleRc");
    //     dispatch(notify({ type: "success", message: response.message }));
    //   } else {
    //     throw new Error(response.message);
    //   }
    // } catch (error) {
    //   dispatch(notify({ type: "error", message: error.message }));
    // }
  };

  const deleteImage = (type) => {
    if (type === "FRONT") {
      setLicenseCreds({ ...licenseCreds, front: "" });
      setIsChoosenFrontFile("No choosen file");
    } else {
      setLicenseCreds({ ...licenseCreds, back: "" });
      setIsChoosenBackFile("No choosen file");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "position"}
      style={{ flex: 1, position: "absolute" }}
      keyboardVerticalOffset={metrics.verticalScale(150)}
    >
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
            <Text
              style={{
                fontSize: 16,
                marginRight: 5,
                fontWeight: "300",
                width: metrics.scale(120),
              }}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {isChoosenFrontFile}
            </Text>
            <TouchableOpacity
              style={{ marginLeft: 20 }}
              onPress={() => deleteImage("FRONT")}
            >
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
              setIsChoosenFile={setIsChoosenBackFile}
            />
            <Text
              style={{ fontSize: 16, marginRight: 5, fontWeight: "300" }}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {isChoosenBackFile}
            </Text>
            <TouchableOpacity
              style={{ marginLeft: 20 }}
              onPress={() => deleteImage("BACK")}
            >
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
    </KeyboardAvoidingView>
  );
};

export default DrivingLicense;
