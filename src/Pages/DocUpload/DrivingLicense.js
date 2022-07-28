import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { AppDocumentPicker, AppMediaHandler } from "../../Components";
import styles from "./styles";
import { DeleteIcon, UploadIcon } from "../../Utility/iconLibrary";
import Api from "../../Services";
import { useDispatch, useSelector } from "react-redux";
import { notify } from "../../Redux/Actions/notificationActions";
import metrics from "../../Utility/metrics";
import { getUserDetails } from "../../Redux/Actions";
import { useEffect } from "react";

const DrivingLicense = ({ navigation }) => {
  const [isChoosenFrontFile, setIsChoosenFrontFile] =
    useState("No choosen file");
  const [isChoosenBackFile, setIsChoosenBackFile] = useState("No choosen file");
  const [isShowModal, setShowModal] = useState(false);
  const user = useSelector((state) => state.auth.user);

  const [licenseCreds, setLicenseCreds] = useState({
    licenseNumber: "",
    front: "",
    back: "",
  });

  useEffect(() => {
    if (user?.documents?.DL_upload_status === 1) {
      const frontImageUrl = user.documents.DL_front_image;
      const frontImageName = frontImageUrl.split("_")[1];
      setIsChoosenFrontFile(frontImageName);
      const backImageUrl = user.documents.DL_back_image;
      const backImageName = backImageUrl.split("_")[1];
      setIsChoosenBackFile(backImageName);
      setLicenseCreds({
        front: frontImageUrl,
        back: backImageUrl,
        licenseNumber: user.documents.DL_number,
      });
    }
  }, [user]);

  const dispatch = useDispatch();
  const onDocumentPicked = (type, doc) => {
    if (type === "FRONT") {
      setIsChoosenFrontFile(doc.key);
      setLicenseCreds({
        ...licenseCreds,
        front: doc.Location,
      });
    } else if (type === "BACK") {
      setIsChoosenBackFile(doc.key);
      setLicenseCreds({
        ...licenseCreds,
        back: doc.Location,
      });
    }
  };

  const onSubmit = async () => {
    try {
      if (licenseCreds.front === "") {
        dispatch(
          notify({ type: "error", message: "Please upload front file" })
        );
        return;
      } else if (licenseCreds.back === "") {
        dispatch(notify({ type: "error", message: "Please upload back file" }));
        return;
      } else if (licenseCreds.licenseNumber === "") {
        dispatch(
          notify({ type: "error", message: "Please add license number" })
        );
        return;
      }
      const payload = {
        frontImageUrl: licenseCreds.front,
        backImageUrl: licenseCreds.back,
        DL_number: licenseCreds.licenseNumber,
        doc_type: "DL",
      };

      const response = await Api.post("/pilot/doc-upload", payload);
      if (response.status === 1) {
        dispatch(getUserDetails());
        navigation.navigate("docUpload");
        dispatch(notify({ type: "success", message: response.message }));
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      dispatch(notify({ type: "error", message: error.message }));
    }
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
            {isChoosenFrontFile !== "No choosen file" && (
              <TouchableOpacity
                style={{ marginLeft: 20 }}
                onPress={() => deleteImage("FRONT")}
              >
                <DeleteIcon />
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.title}>Back</Text>
          <Text style={styles.muted}>Supported files PDF, JPG, PNG</Text>
          <View style={styles.uploadContainer}>
            {/* <View style={styles.pickerContainer}>
              <TouchableOpacity
                style={[styles.pickerButton]}
                onPress={() => setShowModal(true)}
              >
                <UploadIcon size={18} color="white" />
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 16,
                    fontWeight: "600",
                    color: "white",
                    marginLeft: 8,
                  }}
                >
                  Upload
                </Text>
              </TouchableOpacity>
            </View> */}
            <AppDocumentPicker
              title={"upload"}
              onDocumentPicked={(e) => onDocumentPicked("BACK", e)}
              buttonStyle={styles.pickerButton}
              containerStyle={styles.pickerContainer}
              setIsChoosenFile={setIsChoosenBackFile}
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
              {isChoosenBackFile}
            </Text>
            {isChoosenBackFile !== "No choosen file" && (
              <TouchableOpacity
                style={{ marginLeft: 20 }}
                onPress={() => deleteImage("BACK")}
              >
                <DeleteIcon />
              </TouchableOpacity>
            )}
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
            value={licenseCreds.licenseNumber}
          />
        </View>
        <TouchableOpacity style={styles.submit} onPress={onSubmit}>
          <Text style={styles.centerText}>Submit</Text>
        </TouchableOpacity>
      </View>
      {/* <AppMediaHandler isShowModal={isShowModal} setShowModal={setShowModal} /> */}
    </KeyboardAvoidingView>
  );
};

export default DrivingLicense;
