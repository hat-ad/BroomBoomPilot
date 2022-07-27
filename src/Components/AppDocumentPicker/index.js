import { View, TouchableOpacity, Text, ActivityIndicator } from "react-native";
import React, { useCallback, useState } from "react";
// import DocumentPicker, { types } from "react-native-document-picker";
import Axios from "axios";
import { UploadIcon } from "../../Utility/iconLibrary";
import * as DocumentPicker from "expo-document-picker";
import { useDispatch } from "react-redux";
import { notify } from "../../Redux/Actions";

const AppDocumentPicker = ({
  title,
  onDocumentPicked,
  containerStyle,
  buttonStyle,
  onError,
}) => {
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [errormsg, setError] = useState("");
  const handleDocumentSelection = () => {
    DocumentPicker.getDocumentAsync({
      type: ["image/jpeg", "image/jpg", "application/pdf"],
      copyToCacheDirectory: true,
    })
      .then(async (response) => {
        setLoading(true);
        const formData = new FormData();
        formData.append("file", {
          name: response.name,
          uri: response.uri,
          type: response.mimeType,
        });
        try {
          // throw new Error("error");
          const res = await Axios.post(
            "http://3.110.168.181:7000/api/v1/upload/single",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          onError(null);
          setError("");
          onDocumentPicked(res.data.data);
        } catch (error) {
          onError(error.message);
          setError("error!");
          dispatch(
            notify({ message: "Error uploading document", type: "error" })
          );
        }
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };
  return (
    <>
      <View style={containerStyle}>
        <TouchableOpacity
          style={[buttonStyle, errormsg && { backgroundColor: "red" }]}
          onPress={() => {
            handleDocumentSelection();
          }}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator size="small" color="#0000ff" />
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
                {errormsg || title}
              </Text>
            </>
          )}
        </TouchableOpacity>
      </View>
    </>
  );
};

export default AppDocumentPicker;
