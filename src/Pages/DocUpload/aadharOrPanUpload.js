import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { AppDocumentPicker } from "../../Components";
import styles from "./styles";
import { DeleteIcon } from "../../Utility/iconLibrary";
// import matrics from "../../Utility/metrics";

const AadharOrPanUpload = () => {
  const [isChoosenFrontFile, setIsChoosenFrontFile] =
    useState("No choosen file");
  const [isChoosenBackFile, setIsChoosenBackFile] = useState("No choosen file");
  const [adhaarOrPan, setAdhaarOrPan] = useState({
    front: "",
    back: "",
    adhaarOrPanNumber: "",
  });

  const onDocumentPicked = (type, uri) => {
    if (type === "FRONT") {
      setAdhaarOrPan({ ...vehicleRc, front: uri });
    } else {
      setAdhaarOrPan({ ...vehicleRc, back: uri });
    }
  };
  const onSubmit = () => {};
  const deleteImage = (type) => {
    if (type === "FRONT") {
      setAdhaarOrPan({ ...vehicleRc, front: "" });
      setIsChoosenFrontFile("No choosen file");
    } else {
      setAdhaarOrPan({ ...vehicleRc, back: "" });
      setIsChoosenBackFile("No chosen file");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Upload Aadhar or Pan Number</Text>
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
          <Text style={{ fontSize: 16, marginRight: 5, fontWeight: "300" }}>
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
          />
          <Text style={{ fontSize: 16, marginRight: 5, fontWeight: "300" }}>
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
        <Text style={styles.heading}>Enter Aadhar or Pan Number</Text>
        <TextInput placeholder="Enter Addhar or Pan Number" mode="outlined" />
      </View>
      <TouchableOpacity style={styles.submit}>
        <Text style={styles.centerText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AadharOrPanUpload;
