import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import styles from "./style";
import metrics from "../../Utility/metrics";
import { useDispatch, useSelector } from "react-redux";
import { notify } from "../../Redux/Actions";
import Api from "../../Services";

const Error = ({ navigation }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const reSubmit = async () => {
    try {
      const res = await Api.get("/pilot/resubmit-document");
      if (res.status === 1) {
        navigation.replace("searchCity");
        return;
      }
      throw new Error("Cannot resubmit document");
    } catch (error) {
      dispatch(notify({ message: error.message, type: "error" }));
    }
  };
  return (
    <View style={styles.container}>
      <View style={{ width: "100%", alignItems: "center" }}>
        <Image
          style={styles.GreenImg}
          source={require("../../../assets/error.jpg")}
        />
        <Text style={styles.approveText}>Something went wrong</Text>
        <View
          style={{
            width: "100%",
            marginTop: metrics.verticalScale(30),
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              marginBottom: metrics.verticalScale(14),
            }}
          >
            <Image
              style={styles.errorIcon}
              source={{
                uri: "https://broomboomimages.s3.ap-south-1.amazonaws.com/1657284315165_alertError.png",
              }}
            />
            <Text style={styles.errowText}>
              {auth.user?.documents["failed_reasons"]}
            </Text>
          </View>
          {/* <View
            style={{
              flexDirection: "row",
              marginBottom: metrics.verticalScale(14),
            }}
          >
            <Image
              style={styles.errorIcon}
              source={{
                uri: "https://broomboomimages.s3.ap-south-1.amazonaws.com/1657284315165_alertError.png",
              }}
            />
            <Text style={styles.errowText}>
              Men who are so beguile by the charms
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginBottom: metrics.verticalScale(14),
            }}
          >
            <Image
              style={styles.errorIcon}
              source={{
                uri: "https://broomboomimages.s3.ap-south-1.amazonaws.com/1657284315165_alertError.png",
              }}
            />
            <Text style={styles.errowText}>
              Men who are so beguile by the charms
            </Text>
          </View> */}
        </View>
        <Image
          style={styles.NotApprovedImg}
          source={require("../../../assets/notApproved.jpg")}
        />
      </View>
      <TouchableOpacity style={styles.Errorbtn} onPress={reSubmit}>
        <Text style={{ textAlign: "center", fontSize: 18, color: "#fff" }}>
          Resubmit
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Error;
