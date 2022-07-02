import { View, TouchableOpacity, Text } from "react-native";
import React, { useCallback } from "react";
// import DocumentPicker, { types } from "react-native-document-picker";

import { UploadIcon } from "../../Utility/iconLibrary";
import * as DocumentPicker from "expo-document-picker";
import Api from "../../Services";

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
      let { name, size, uri, mimeType } = response;
      let nameParts = name.split(".");
      let fileType = nameParts[nameParts.length - 1];
      const fileToUpload = {
        name: name,
        size: size,
        uri: uri,
        type: mimeType,
      };

      const formData = new FormData();
      formData.append("file", fileToUpload, uri);
      const uploadedFile = await Api.postForm("/upload/single", formData);
      console.log(formData, uploadedFile);

      onDocumentPicked(response);
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
