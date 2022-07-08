import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
// import { SteeringIcon } from "../../Utility/iconLibrary";
import metrics from "../../Utility/metrics";
import {
  MapMarkerIcon,
  ArrowRight,
  AddressCardIcon,
  CircleCheckIcon,
} from "../../Utility/iconLibrary";
import { useDispatch, useSelector } from "react-redux";
import Api from "../../Services";
import { getUserDetails, notify } from "../../Redux/Actions";

const DocUpload = ({ navigation, route }) => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const onSubmit = async () => {
    try {
      const response = await Api.get("/pilot/submit-document");
      if (response.status === 1) {
        navigation.popToTop();
        navigation.replace("pending");
        dispatch(notify({ type: "success", message: response.message }));
        dispatch(getUserDetails());
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      dispatch(notify({ type: "error", message: error.message }));
    }
  };

  return (
    <View style={[styles.container, { paddingRight: metrics.scale(20) }]}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: metrics.verticalScale(20),
          paddingBottom: metrics.verticalScale(10),
          borderBottomWidth: 1,
          borderBottomColor: "#828282",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MapMarkerIcon
            style={{ marginRight: 10 }}
            size={24}
            color={"#828282"}
          />
          <Text>{user.details.city}</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("searchCity")}>
          <Text style={{ color: "#347EEA" }}>Change</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <Text
          style={{
            fontSize: 22,
            fontWeight: "700",
            textAlign: "center",
            width: "100%",
            marginBottom: metrics.scale(40),
          }}
        >
          Let's upload the following documents to activate your account
        </Text>
        <View>
          <TouchableOpacity
            style={styles.boxBtn}
            onPress={() => navigation.navigate("drivingLicense")}
          >
            <Image
              style={{ width: 50, height: 32 }}
              source={{
                uri: "https://broomboomimages.s3.ap-south-1.amazonaws.com/1657284315139_DriveLic.png",
              }}
            />
            <Text style={styles.box}>Driving License</Text>
            {user.documents?.DL_upload_status ? (
              <CircleCheckIcon
                style={{ alignSelf: "center" }}
                color="green"
                size={20}
              />
            ) : (
              <ArrowRight style={{ alignSelf: "center" }} size={20} />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.boxBtn}
            onPress={() => navigation.navigate("vehicleRc")}
          >
            <Image
              source={{
                uri: "https://broomboomimages.s3.ap-south-1.amazonaws.com/1657284315292_VehicleRC.png",
              }}
            />
            <Text style={styles.box}>Vehicle RC</Text>
            {user.documents?.RC_upload_status ? (
              <CircleCheckIcon
                style={{ alignSelf: "center" }}
                color="green"
                size={20}
              />
            ) : (
              <ArrowRight style={{ alignSelf: "center" }} size={20} />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.boxBtn}
            onPress={() => navigation.navigate("aadharUpload")}
          >
            <Image
              source={{
                uri: "https://broomboomimages.s3.ap-south-1.amazonaws.com/1657284315122_Aadhar.png",
              }}
            />
            <Text style={styles.box}>Aadhaar Card</Text>
            {user.documents?.AADHAAR_upload_status ? (
              <CircleCheckIcon
                style={{ alignSelf: "center" }}
                color="green"
                size={20}
              />
            ) : (
              <ArrowRight style={{ alignSelf: "center" }} size={20} />
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.boxBtn}
            onPress={() => navigation.navigate("panUpload")}
          >
            <Image
              source={{
                uri: "https://broomboomimages.s3.ap-south-1.amazonaws.com/1657284315122_Aadhar.png",
              }}
            />
            <Text style={styles.box}>Pan Card</Text>
            {user.documents?.PAN_CARD_upload_status ? (
              <CircleCheckIcon
                style={{ alignSelf: "center" }}
                color="green"
                size={20}
              />
            ) : (
              <ArrowRight style={{ alignSelf: "center" }} size={20} />
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.boxBtn}
            onPress={() => navigation.navigate("profileDetails")}
          >
            <Image
              source={{
                uri: "https://broomboomimages.s3.ap-south-1.amazonaws.com/1657284315185_profile.png",
              }}
            />
            <Text style={styles.box}>Profile Details</Text>
            {user.pilot?.profile_upload_status ? (
              <CircleCheckIcon
                style={{ alignSelf: "center" }}
                color="green"
                size={20}
              />
            ) : (
              <ArrowRight style={{ alignSelf: "center" }} size={20} />
            )}
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.submit} onPress={onSubmit}>
          <Text style={styles.centerText}>Proceed</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default DocUpload;
