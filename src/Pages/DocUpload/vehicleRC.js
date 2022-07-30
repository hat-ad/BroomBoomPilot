import {
  View,
  Text,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import { TextInput, Portal, Modal } from "react-native-paper";
import { AppDocumentUploader, AppMediaHandler } from "../../Components";
import styles from "./styles";
import {
  DeleteIcon,
  SteeringIcon,
  InfoCircle,
} from "../../Utility/iconLibrary";
import metrics from "../../Utility/metrics";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails, notify } from "../../Redux/Actions";
import Api from "../../Services";
import { captureReset } from "../../Redux/Actions/cameraActions";

const VehicleRC = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const camera = useSelector((state) => state.camera);

  const [visible, setVisible] = useState(true);
  const [vehicleType, setVehicleType] = useState("");
  const [isChoosenFrontFile, setIsChoosenFrontFile] =
    useState("No choosen file");
  const [isChoosenBackFile, setIsChoosenBackFile] = useState("No choosen file");
  const [vehicleRc, setVehicleRc] = useState({
    front: "",
    back: "",
    vehicleRcNumber: "",
  });
  const [errorFront, setErrorFront] = useState(false);
  const [errorBack, setErrorBack] = useState(false);
  const [isShowModal, setShowModal] = useState(false);
  const [activePhase, setActivePhase] = useState("FRONT");

  useEffect(() => {
    if (camera?.data) {
      if (activePhase === "FRONT") {
        setVehicleRc({ ...vehicleRc, front: camera.data.Location });
        setIsChoosenFrontFile(camera.data.key);
      } else {
        setVehicleRc({ ...vehicleRc, back: camera.data.Location });
        setIsChoosenBackFile(camera.data.key);
      }
      dispatch(captureReset());
    }
    if (camera?.error && !camera.isLoading)
      activePhase === "FRONT" ? setErrorFront(true) : setErrorBack(true);
    return () => {
      dispatch(captureReset());
    };
  }, [camera]);

  useEffect(() => {
    if (user?.documents?.RC_upload_status === 1) {
      const frontImageUrl = user.documents.vehicle_RC_front_image;
      const frontImageName = frontImageUrl.split("_")[1];
      setIsChoosenFrontFile(frontImageName);
      const backImageUrl = user.documents.vehicle_RC_back_image;
      const backImageName = backImageUrl.split("_")[1];
      setIsChoosenBackFile(backImageName);
      setVehicleRc({
        front: frontImageUrl,
        back: backImageUrl,
        vehicleRcNumber: user.documents.vehicle_RC_Number,
      });
      setVehicleType(user.documents.vehicle_type);
    }
  }, [user]);

  const vehicleTypeEnum = Object.freeze({
    CAR: "Car",
    SCOOTY: "Scooty",
    "MOTOR-BIKE": "Motor Bike",
    "AUTO-RICKSHAW": "Auto Rickshaw",
    TOTO: "Toto",
  });

  const handleModal = (type, wheel) => {
    setVehicleType(type);
    setVisible(false);
  };

  const onDocumentPicked = (type, doc) => {
    if (type === "FRONT") {
      setIsChoosenFrontFile(doc.key);
      setVehicleRc({ ...vehicleRc, front: doc.Location });
    } else if (type === "BACK") {
      setIsChoosenBackFile(doc.key);
      setVehicleRc({ ...vehicleRc, back: doc.Location });
    }
  };

  const onSubmit = async () => {
    try {
      if (vehicleRc.front === "") {
        dispatch(
          notify({ type: "error", message: "Please upload front file" })
        );
        return;
      } else if (vehicleRc.back === "") {
        dispatch(notify({ type: "error", message: "Please upload back file" }));
        return;
      } else if (vehicleRc.vehicleRcNumber === "") {
        dispatch(
          notify({ type: "error", message: "Please add vehicle rc number" })
        );
        return;
      } else if (vehicleType === "") {
        dispatch(
          notify({ type: "error", message: "Please Select vehicle type" })
        );
        return;
      }

      const payload = {
        frontImageUrl: vehicleRc.front,
        backImageUrl: vehicleRc.back,
        vehicle_RC_Number: vehicleRc.vehicleRcNumber,
        vehicle_type: vehicleType,
        doc_type: "RC",
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
      setVehicleRc({ ...vehicleRc, front: "" });
      setIsChoosenFrontFile("No choosen file");
    } else {
      setVehicleRc({ ...vehicleRc, back: "" });
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
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: metrics.verticalScale(20),
            paddingBottom: 8,
            borderBottomWidth: 0.2,
            marginTop: metrics.verticalScale(5),
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <SteeringIcon />
            <Text>Vehicle type : </Text>
            <Text>{vehicleTypeEnum[vehicleType]}</Text>
          </View>
          <TouchableOpacity onPress={() => setVisible(true)}>
            <Text>Change</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.heading}>Upload Vehicle RC Image</Text>
        <View style={{ marginTop: 15 }}>
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
            {/* {isChoosenFrontFile !== "No choosen file" && ( */}
            <TouchableOpacity
              style={{ marginLeft: 20 }}
              onPress={() => deleteImage("FRONT")}
            >
              <DeleteIcon />
            </TouchableOpacity>
            {/* )} */}
          </View>
        </View>
        <View style={{ marginTop: 15 }}>
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
            {/* {isChoosenBackFile !== "No choosen file" && ( */}
            <TouchableOpacity
              style={{ marginLeft: 20 }}
              onPress={() => deleteImage("BACK")}
            >
              <DeleteIcon />
            </TouchableOpacity>
            {/* )} */}
          </View>
        </View>

        <View
          style={{
            marginTop: 25,
          }}
        >
          <Text style={styles.heading}>Enter Vehicle RC number</Text>
          <TextInput
            placeholder="Enter Vehicle RC number"
            mode="outlined"
            onChangeText={(text) =>
              setVehicleRc({ ...vehicleRc, vehicleRcNumber: text })
            }
            value={vehicleRc.vehicleRcNumber}
          />
          {/* < InfoCircle /> */}
        </View>
        <TouchableOpacity style={styles.submit} onPress={() => onSubmit()}>
          <Text style={styles.centerText}>Submit</Text>
        </TouchableOpacity>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={() => setVisible(false)}
            contentContainerStyle={{
              backgroundColor: "white",
              padding: metrics.scale(40),
              marginHorizontal: metrics.scale(10),
              borderRadius: 20,
            }}
          >
            <View style={styles.row}>
              <TouchableOpacity
                style={[styles.modalImageContainer]}
                onPress={() => handleModal("CAR", 4)}
              >
                <Image
                  style={styles.image}
                  resizeMode={"contain"}
                  source={{
                    uri: "https://broomboomimages.s3.ap-south-1.amazonaws.com/1657284315152_car.png",
                  }}
                />
                <Text style={styles.iconText}>Car</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalImageContainer}
                onPress={() => handleModal("SCOOTY", 2)}
              >
                <Image
                  style={styles.image}
                  resizeMode={"contain"}
                  source={{
                    uri: "https://broomboomimages.s3.ap-south-1.amazonaws.com/1657284315229_scooty.png",
                  }}
                />
                <Text style={styles.iconText}>Scooty</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity
                style={[styles.modalImageContainer]}
                onPress={() => handleModal("AUTO-RICKSHAW", 3)}
              >
                <Image
                  style={styles.image}
                  resizeMode={"contain"}
                  source={{
                    uri: "https://broomboomimages.s3.ap-south-1.amazonaws.com/1657284315168_auto.png",
                  }}
                />
                <Text style={styles.iconText}>Auto Rickshaw</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalImageContainer}
                onPress={() => handleModal("MOTOR-BIKE", 2)}
              >
                <Image
                  style={styles.image}
                  resizeMode={"contain"}
                  source={{
                    uri: "https://broomboomimages.s3.ap-south-1.amazonaws.com/1657284315130_bike.png",
                  }}
                />
                <Text style={styles.iconText}>Motorbike</Text>
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity
                style={[styles.modalImageContainer]}
                onPress={() => handleModal("TOTO", 3)}
              >
                <Image
                  style={styles.image}
                  resizeMode={"contain"}
                  source={{
                    uri: "https://broomboomimages.s3.ap-south-1.amazonaws.com/1657284315287_toto.png",
                  }}
                />
                <Text style={styles.iconText}>Toto</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </Portal>
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

export default VehicleRC;
