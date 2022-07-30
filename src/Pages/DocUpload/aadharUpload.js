import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { TextInput } from "react-native-paper";
import { AppDocumentUploader, AppMediaHandler } from "../../Components";
import styles from "./styles";
import { DeleteIcon, UploadIcon } from "../../Utility/iconLibrary";
import metrics from "../../Utility/metrics";
import { RadioButton } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails, notify } from "../../Redux/Actions";
import Api from "../../Services";
import { captureReset } from "../../Redux/Actions/cameraActions";

// import matrics from "../../Utility/metrics";

const AadharOrPanUpload = ({ navigation }) => {
  const [isChoosenFrontFile, setIsChoosenFrontFile] =
    useState("No choosen file");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const camera = useSelector((state) => state.camera);

  const [isChoosenBackFile, setIsChoosenBackFile] = useState("No choosen file");
  const [adhaarOrPan, setAdhaarOrPan] = useState({
    front: "",
    back: "",
    adhaarOrPanNumber: "",
  });
  const [errorFront, setErrorFront] = useState(false);
  const [errorBack, setErrorBack] = useState(false);
  const [isShowModal, setShowModal] = useState(false);
  const [activePhase, setActivePhase] = useState("FRONT");

  useEffect(() => {
    if (camera?.data) {
      if (activePhase === "FRONT") {
        setAdhaarOrPan({ ...adhaarOrPan, front: camera.data.Location });
        setIsChoosenFrontFile(camera.data.key.split("_")[1]);
      } else {
        setAdhaarOrPan({ ...adhaarOrPan, back: camera.data.Location });
        setIsChoosenBackFile(camera.data.key.split("_")[1]);
      }
      dispatch(captureReset());
    }
    if (camera?.error && !camera.isLoading)
      activePhase === "FRONT" ? setErrorFront(true) : setErrorBack(true);
  }, [camera]);
  useEffect(() => {
    return () => {
      dispatch(captureReset());
    };
  }, []);
  useEffect(() => {
    if (user?.documents?.AADHAAR_upload_status === 1) {
      const frontImageUrl = user.documents.AADHAAR_front_image;
      const frontImageName = frontImageUrl.split("_")[1];
      setIsChoosenFrontFile(frontImageName);
      const backImageUrl = user.documents.AADHAAR_back_image;
      const backImageName = backImageUrl.split("_")[1];
      setIsChoosenBackFile(backImageName);
      setAdhaarOrPan({
        front: frontImageUrl,
        back: backImageUrl,
        adhaarOrPanNumber: user.documents.AADHAAR_number,
      });
    }
  }, [user]);

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
            message: "Please add Aadhaar number",
          })
        );
        return;
      }
      const payload = {
        frontImageUrl: adhaarOrPan.front,
        backImageUrl: adhaarOrPan.back,
        aadhaar_number: adhaarOrPan.adhaarOrPanNumber,
        doc_type: "AADHAAR",
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
        <Text style={styles.heading}>Upload Aadhar Card Image</Text>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.title}>Front</Text>
          <Text style={styles.muted}>Supported files PDF, JPG, PNG</Text>
          <View style={styles.uploadContainer}>
            <AppDocumentUploader
              pickerContainer={styles.pickerContainer}
              pickerButton={styles.pickerButton}
              onUploadPressed={() => {
                setShowModal(true);
                setActivePhase("FRONT");
              }}
              defaultPhase={"FRONT"}
              activePhase={activePhase}
              error={errorFront}
              isLoading={camera.isLoading}
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
            <AppDocumentUploader
              pickerContainer={styles.pickerContainer}
              pickerButton={styles.pickerButton}
              onUploadPressed={() => {
                setShowModal(true);
                setActivePhase("BACK");
              }}
              defaultPhase={"BACK"}
              activePhase={activePhase}
              error={errorBack}
              isLoading={camera.isLoading}
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
          <Text style={styles.heading}>Enter Aadhaar Number</Text>
          <TextInput
            placeholder="Enter Aadhaar Number"
            onChangeText={(e) => {
              setAdhaarOrPan({ ...adhaarOrPan, adhaarOrPanNumber: e });
            }}
            mode="outlined"
            value={adhaarOrPan.adhaarOrPanNumber}
          />
        </View>
        <TouchableOpacity style={styles.submit} onPress={onSubmit}>
          <Text style={styles.centerText}>Submit</Text>
        </TouchableOpacity>
      </View>
      <AppMediaHandler
        isShowModal={isShowModal}
        setShowModal={setShowModal}
        onDocumentPicked={(e) => onDocumentPicked(activePhase, e)}
        onError={(e) => {
          dispatch(captureReset());
          activePhase === "FRONT" ? setErrorFront(e) : setErrorBack(e);
        }}
      />
    </KeyboardAvoidingView>
  );
};

export default AadharOrPanUpload;
