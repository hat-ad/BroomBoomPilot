import { View, TouchableOpacity, Text } from "react-native";
import React, { useCallback } from "react";
// import DocumentPicker, { types } from "react-native-document-picker";

import { UploadIcon } from "../../Utility/iconLibrary";
import * as DocumentPicker from "expo-document-picker";

const AppDocumentPicker = ({
  title,
  onDocumentPicked,
  containerStyle,
  buttonStyle,
  setIsChoosenFile,
}) => {
  const handleDocumentSelection = async () => {
    console.log("handleDocumentSelection");
    let result = await DocumentPicker.getDocumentAsync({
      type: "*/*",
      copyToCacheDirectory: true,
    }).then((response) => {
      console.log(response);
      onDocumentPicked(response.uri);
      setIsChoosenFile(response.mimeType);
    });
  };
  return (
    <View style={containerStyle}>
      <TouchableOpacity
        style={buttonStyle}
        onPress={() => {
          console.log("onDocumentPicked");
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
