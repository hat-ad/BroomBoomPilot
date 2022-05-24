import { View, Button, Text } from "react-native";
import React, { useCallback } from "react";
import DocumentPicker, { types } from "react-native-document-picker";
import { TouchableOpacity } from "react-native-gesture-handler";
import { UploadIcon } from "../../Utility/iconLibrary";

const AppDocumentPicker = ({
  title,
  containerStyle,
  buttonStyle,
  onDocumentPicked,
}) => {
  const handleDocumentSelection = async () => {
    try {
      const pickerResult = await DocumentPicker.pickMultiple({
        presentationStyle: "fullScreen",
        copyTo: "cachesDirectory",
      });
      onDocumentPicked([pickerResult]);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={containerStyle}>
      <TouchableOpacity style={buttonStyle} onPress={handleDocumentSelection}>
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
