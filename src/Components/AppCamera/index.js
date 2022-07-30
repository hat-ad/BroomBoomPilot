import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Camera } from "expo-camera";
import { notify } from "../../Redux/Actions";
import {
  CameraIcon,
  CheckIcon,
  CrossIcon,
  FlipCameraIcon,
} from "../../Utility/iconLibrary";
import { useDispatch } from "react-redux";
import metrics from "../../Utility/metrics";
import {
  captureReset,
  captureSuccess,
  mediaUploadLoader,
} from "../../Redux/Actions/cameraActions";
import { useNavigation } from "@react-navigation/native";

const WINDOW_HEIGHT = Dimensions.get("window").height;

export default function AppCamera() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const cameraRef = useRef();
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [isPreview, setIsPreview] = useState(false);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [imageData, setData] = useState(null);

  useEffect(() => {
    dispatch(mediaUploadLoader(true));
    onHandlePermission();
    return () => {
      dispatch(mediaUploadLoader(false));
    };
  }, []);

  const onHandlePermission = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === "granted");
    if (status !== "granted") {
      dispatch(mediaUploadLoader(false));
    }
  };

  const onCameraReady = () => {
    setIsCameraReady(true);
  };

  // const switchCamera = () => {
  //   if (isPreview) {
  //     return;
  //   }
  //   console.log(
  //     cameraType,
  //     Camera.Constants.Type.back,
  //     Camera.Constants.Type.front
  //   );
  //   setCameraType(
  //     cameraType === Camera.Constants.Type.back
  //       ? Camera.Constants.Type.front
  //       : Camera.Constants.Type.back
  //   );
  // };

  const onSnap = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.7, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      const source = data.base64;
      setData(data);
      if (source) {
        await cameraRef.current.pausePreview();
        setIsPreview(true);
      }
    }
  };

  const onConfirm = async () => {
    if (imageData) {
      dispatch(captureSuccess(imageData));
      await cameraRef.current.resumePreview();
      setIsPreview(false);
      setData(null);
      navigation.goBack();
    }
  };

  const cancelPreview = async () => {
    await cameraRef.current.resumePreview();
    setIsPreview(false);
    dispatch(captureReset());
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return dispatch(
      notify({ message: "Camera access permission denied", type: "error" })
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <Camera
        autoFocus={true}
        ref={cameraRef}
        style={styles.container}
        type={cameraType}
        onCameraReady={onCameraReady}
        useCamera2Api={true}
      />
      {/* <View style={{ flex: 1 }}> */}
      <View style={styles.bottomButtonsContainer}>
        {isPreview && (
          <>
            <TouchableOpacity
              style={{
                backgroundColor: "#fff",
                padding: 15,
                borderRadius: 100,
              }}
              onPress={onConfirm}
            >
              <CheckIcon size={32} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={cancelPreview}
              style={styles.closeButton}
              activeOpacity={0.7}
            >
              <CrossIcon size={32} color={"#fff"} />
            </TouchableOpacity>
          </>
        )}
      </View>
      {!isPreview && (
        <View style={styles.bottomButtonsContainer}>
          {/* <TouchableOpacity
            disabled={!isCameraReady}
            onPress={switchCamera}
            style={{ position: "absolute", left: metrics.scale(50) }}
          >
            <FlipCameraIcon color={"#fff"} size={28} />
          </TouchableOpacity> */}
          <TouchableOpacity
            activeOpacity={0.7}
            disabled={!isCameraReady}
            onPress={onSnap}
            style={styles.capture}
          >
            <CameraIcon size={28} />
          </TouchableOpacity>
        </View>
      )}
      {/* </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // ...StyleSheet.absoluteFillObject,
    position: "absolute",
    left: 0,
    right: 0,
    top: StatusBar.currentHeight + 5,
    bottom: metrics.verticalScale(200),
  },
  text: {
    color: "#fff",
  },
  bottomButtonsContainer: {
    position: "absolute",
    flexDirection: "row",
    bottom: 28,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
  },
  closeButton: {
    position: "absolute",
    // top: 35,
    right: metrics.scale(50),
    // height: 50,
    // width: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#fff",
    opacity: 0.7,
  },
  capture: {
    backgroundColor: "white",
    // borderRadius: 5,
    // height: CAPTURE_SIZE,
    // width: CAPTURE_SIZE,
    borderRadius: 100,
    padding: 20,
    // marginBottom: 28,
    // marginHorizontal: metrics.scale(0),
    alignItems: "center",
    justifyContent: "center",
  },
});
