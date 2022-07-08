import {
  View,
  Text,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { TextInput, Portal, Modal } from "react-native-paper";
import { AppDocumentPicker } from "../../Components";
import styles from "./styles";
import {
  DeleteIcon,
  SteeringIcon,
  InfoCircle,
} from "../../Utility/iconLibrary";
import metrics from "../../Utility/metrics";
import { useDispatch } from "react-redux";
import { getUserDetails, notify } from "../../Redux/Actions";
import Api from "../../Services";

const VehicleRC = ({ navigation }) => {
  const dispatch = useDispatch();
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
            <AppDocumentPicker
              title={"upload"}
              onDocumentPicked={(e) => onDocumentPicked("FRONT", e)}
              buttonStyle={styles.pickerButton}
              containerStyle={styles.pickerContainer}
              setIsChoosenFile={setIsChoosenFrontFile}
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
        <View style={{ marginTop: 15 }}>
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
                  source={require({
                    uri: "https://broomboomimages.s3.ap-south-1.amazonaws.com/1657284315168_auto.png",
                  })}
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
    </KeyboardAvoidingView>
  );
};

export default VehicleRC;
