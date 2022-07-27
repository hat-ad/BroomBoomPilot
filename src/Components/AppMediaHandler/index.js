import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native";
import React, { useState } from "react";
import SwipeUpDownModal from "react-native-swipe-modal-up-down";
import { CameraIcon, GalleryIcon } from "../../Utility/iconLibrary";
import metrics from "../../Utility/metrics";
import * as DocumentPicker from "expo-document-picker";
import { notify } from "../../Redux/Actions";
import { useDispatch } from "react-redux";
import Axios from "axios";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";

const AppMediaHandler = ({
  isShowModal,
  setShowModal,
  onDocumentPicked,
  onError,
}) => {
  const [animateModal, setanimateModal] = useState(false);
  const dispatch = useDispatch();

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
        // setError("");
        onDocumentPicked(res.data.data);
      } catch (error) {
        onError(error.message);
        // setError("error!");
        dispatch(
          notify({ message: "Error uploading document", type: "error" })
        );
      }
    });
    setShowModal(false);
  };

  return (
    <SwipeUpDownModal
      MainContainerModal={{ flex: 1 }}
      modalVisible={isShowModal}
      PressToanimate={animateModal}
      //if you don't pass HeaderContent you should pass marginTop in view of ContentModel to Make modal swipeable
      ContentModal={
        <View style={styles.containerContent}>
          <TouchableOpacity
            style={{
              marginHorizontal: metrics.scale(20),
              alignItems: "center",
            }}
            onPress={() => {
              const result = launchCamera({}, (e) => {
                console.log(e);
              });
              console.log(result);
            }}
          >
            <CameraIcon size={50} />
            <Text>Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginHorizontal: metrics.scale(20),
              alignItems: "center",
            }}
            onPress={handleDocumentSelection}
          >
            <GalleryIcon size={50} />
            <Text>Gallery</Text>
          </TouchableOpacity>
        </View>
      }
      HeaderStyle={styles.headerContent}
      ContentModalStyle={styles.Modal}
      HeaderContent={
        <View style={styles.containerHeader}>
          <TouchableOpacity
            onPress={() => setanimateModal(true)}
            style={{ width: "100%", alignItems: "center" }}
          >
            <View style={styles.border} />
          </TouchableOpacity>
        </View>
      }
      onClose={() => {
        setShowModal(false);
        setanimateModal(false);
      }}
    />
  );
};

const styles = StyleSheet.create({
  containerContent: {
    flexDirection: "row",
    position: "absolute",
    bottom: metrics.verticalScale(30),
  },
  containerHeader: {
    // flex: 0.5,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    backgroundColor: "#fff",
    marginTop: metrics.verticalScale(650),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  headerContent: {
    marginTop: metrics.verticalScale(0),
  },
  Modal: {
    backgroundColor: "#fff",
    marginTop: metrics.verticalScale(650),
    borderRadius: 30,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    flex: 1,
  },
  border: {
    borderBottomColor: "black",
    borderBottomWidth: 4,
    width: "10%",
    borderRadius: 50,
  },
});

export default AppMediaHandler;
