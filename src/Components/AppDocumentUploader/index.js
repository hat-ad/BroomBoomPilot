import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";
import { UploadIcon } from "../../Utility/iconLibrary";

const AppDocumentUploader = ({
  pickerContainer,
  pickerButton,
  error,
  onUploadPressed,
  defaultPhase,
  activePhase,
  isLoading,
}) => {
  return (
    <View style={pickerContainer}>
      <TouchableOpacity
        style={[pickerButton, error && { backgroundColor: "red" }]}
        onPress={onUploadPressed}
        disabled={isLoading}
      >
        {isLoading && activePhase === defaultPhase ? (
          <ActivityIndicator size="small" color="#FFF" />
        ) : (
          <>
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
              {error ? "Error!" : "Upload"}
            </Text>
          </>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default AppDocumentUploader;
