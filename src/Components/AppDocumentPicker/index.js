import { View, TouchableOpacity, Text } from "react-native";
import React, { useCallback } from "react";
// import DocumentPicker, { types } from "react-native-document-picker";
import Axios from "axios";
import { UploadIcon } from "../../Utility/iconLibrary";
import * as DocumentPicker from "expo-document-picker";

const AppDocumentPicker = ({
  title,
  onDocumentPicked,
  containerStyle,
  buttonStyle,
}) => {
  const handleDocumentSelection = () => {
    DocumentPicker.getDocumentAsync({
      type: ["image/jpeg", "image/jpg", "application/pdf"],
      copyToCacheDirectory: true,
    }).then(async (response) => {
      const formData = new FormData();
      formData.append("file", {
        name: response.name,
        uri: response.uri,
        type: response.mimeType,
      });
      try {
        const res = await Axios.post(
          "http://192.168.0.106:7000/api/v1/upload/single",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("response", res);
        onDocumentPicked(res.data.data);
      } catch (error) {
        console.log(error.message);
      }
    });
  };
  return (
    <View style={containerStyle}>
      <TouchableOpacity
        style={buttonStyle}
        onPress={() => {
          handleDocumentSelection();
        }}
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
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AppDocumentPicker;
