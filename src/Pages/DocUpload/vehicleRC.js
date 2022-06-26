import { View, Text, TouchableOpacity, Image } from "react-native";
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

const VehicleRC = ({ navigation }) => {
  const [visible, setVisible] = useState(true);
  const [vehicleType, setVehicleType] = useState("Car/Four Wheeler");
  const [isChoosenFrontFile, setIsChoosenFrontFile] =
    useState("No choosen file");
  const [isChoosenBackFile, setIsChoosenBackFile] = useState("No choosen file");
  const [vehicleRc, setVehicleRc] = useState({
    front: "",
    back: "",
    vehicleRcNumber: "",
  });

  const handleModal = (type, wheel) => {
    setVehicleType(`${type}/${wheel} Wheeler`);
    setVisible(false);
  };
  const onDocumentPicked = (type, uri) => {
    if (type === "FRONT") {
      setVehicleRc({ ...vehicleRc, front: uri });
    } else {
      setVehicleRc({ ...vehicleRc, back: uri });
    }
  };
  const onSubmit = () => {};
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
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: metrics.verticalScale(20),
          paddingBottom: 8,
          borderBottomWidth: 0.2,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <SteeringIcon />
          <Text>Vehicle type : </Text>
          <Text>{vehicleType}</Text>
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
          marginTop: 25,
        }}
      >
        <Text style={styles.heading}>Enter Vehicle RC number</Text>
        <TextInput placeholder="Enter DL number" mode="outlined" />
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
              onPress={() => handleModal("Car", 4)}
            >
              <Image
                style={styles.image}
                resizeMode={"contain"}
                source={require("../../../assets/car.png")}
              />
              <Text style={styles.iconText}>Car</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalImageContainer}
              onPress={() => handleModal("Scooty", 2)}
            >
              <Image
                style={styles.image}
                resizeMode={"contain"}
                source={require("../../../assets/scooty.png")}
              />
              <Text style={styles.iconText}>Scooty</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              style={[styles.modalImageContainer, styles.selected]}
              onPress={() => handleModal("Auto Rickshaw", 3)}
            >
              <Image
                style={styles.image}
                resizeMode={"contain"}
                source={require("../../../assets/auto.png")}
              />
              <Text style={styles.iconText}>Auto Rickshaw</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalImageContainer}
              onPress={() => handleModal("Motorbike", 2)}
            >
              <Image
                style={styles.image}
                resizeMode={"contain"}
                source={require("../../../assets/bike.png")}
              />
              <Text style={styles.iconText}>Motorbike</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </Portal>
    </View>
  );
};

export default VehicleRC;
