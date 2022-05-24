import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";
import { AppDocumentPicker } from "../../Components";
import styles from "./styles";
import { DeleteIcon } from "../../Utility/iconLibrary";

const DrivingLicense = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Upload Driving License Image</Text>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.title}>Front</Text>
        <Text style={styles.muted}>Supported files PDF, JPG, PNG</Text>
        <View style={styles.uploadContainer}>
          <AppDocumentPicker
            title={"upload"}
            onDocumentPicked={(e) => console.log(e)}
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
            onDocumentPicked={(e) => console.log(e)}
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
        <TextInput placeholder="Enter DL number" mode="outlined" />
      </View>
      <TouchableOpacity style={styles.submit}>
        <Text style={styles.centerText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DrivingLicense;
