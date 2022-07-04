import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { AppDocumentPicker } from "../../Components";
import styles from "./styles";
import { DeleteIcon } from "../../Utility/iconLibrary";
import metrics from "../../Utility/metrics";
import { RadioButton } from "react-native-paper";

// import matrics from "../../Utility/metrics";

const AadharOrPanUpload = () => {
  const [isChoosenFrontFile, setIsChoosenFrontFile] =
    useState("No choosen file");
  const [checked, setChecked] = React.useState("first");

  const [docType, setDocType] = useState("AADHAAR");

  const [isChoosenBackFile, setIsChoosenBackFile] = useState("No choosen file");
  const [adhaarOrPan, setAdhaarOrPan] = useState({
    front: "",
    back: "",
    adhaarOrPanNumber: "",
  });

  const onDocumentPicked = (type, uri) => {
    if (type === "FRONT") {
      setIsChoosenFrontFile(uri.key);
      setAdhaarOrPan({ ...adhaarOrPan, front: uri.Location });
    } else {
      setIsChoosenBackFile(uri.key);
      setAdhaarOrPan({ ...adhaarOrPan, back: uri.Location });
    }
  };
  const onSubmit = async () => {
    try {
      if (adhaarOrPan.front === "") {
        dispatch(
          notify({ type: "error", message: "Please upload front file" })
        );
        return;
      } else if (adhaarOrPan.back === "") {
        dispatch(notify({ type: "error", message: "Please upload back file" }));
        return;
      } else if (adhaarOrPan.adhaarOrPanNumber === "") {
        dispatch(
          notify({
            type: "error",
            message: "Please add adhaar Or PanNumber number",
          })
        );
        return;
      }
      const payload = {
        frontImageUrl: adhaarOrPan.front,
        backImageUrl: adhaarOrPan.back,
        DL_number: adhaarOrPan.adhaarOrPanNumber,
        doc_type: docType,
      };

      const response = await Api.post("/pilot/doc-upload", payload);
      if (response.status === 1) {
        navigation.navigate("docUpload");
        dispatch(notify({ type: "success", message: response.message }));
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      dispatch(notify({ type: "error", message: error.message }));
    }
  };
  console.log("adhaarOrPan", adhaarOrPan);
  const deleteImage = (type) => {
    if (type === "FRONT") {
      setAdhaarOrPan({ ...adhaarOrPan, front: "" });
      setIsChoosenFrontFile("No choosen file");
    } else {
      setAdhaarOrPan({ ...adhaarOrPan, back: "" });
      setIsChoosenBackFile("No chosen file");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "position"}
      style={{ flex: 1, position: "absolute" }}
      keyboardVerticalOffset={metrics.verticalScale(150)}
    >
      <View style={styles.container}>
        <Text style={styles.heading}>Select One</Text>
        <RadioButton.Group
          onValueChange={(value) => setDocType(value)}
          value={docType}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <RadioButton value="AADHAAR" />
              <Text>Aadhar Card</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <RadioButton value="PAN" />
              <Text>Pan Card</Text>
            </View>
          </View>
        </RadioButton.Group>

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
          <Text style={styles.heading}>
            {docType === "PAN" ? "Enter Pan Number" : "Enter Aadhaar Number"}
          </Text>
          <TextInput
            placeholder={
              docType === "PAN" ? "Enter Pan Number" : "Enter Aadhaar Number"
            }
            onChangeText={(e) => {
              setAdhaarOrPan({ ...adhaarOrPan, adhaarOrPanNumber: e });
            }}
            mode="outlined"
          />
        </View>
        <TouchableOpacity style={styles.submit} onPress={onSubmit}>
          <Text style={styles.centerText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default AadharOrPanUpload;
