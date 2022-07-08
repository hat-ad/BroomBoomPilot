import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import styles from "./style";
import metrics from "../../Utility/metrics";

const Error = () => {
  return (
    <View style={styles.container}>
      <View style={{ width: "100%", alignItems: "center" }}>
        <Image
          style={styles.GreenImg}
          source={{
            uri: "https://broomboomimages.s3.ap-south-1.amazonaws.com/1657284315216_redMark.png",
          }}
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
              Error reason 1 "On the other hand, we a
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
          </View>
        </View>
        <Image
          style={styles.NotApprovedImg}
          source={{
            uri: "https://broomboomimages.s3.ap-south-1.amazonaws.com/1657284315192_NotApproved.png",
          }}
        />
      </View>
      <TouchableOpacity style={styles.Errorbtn}>
        <Text style={{ textAlign: "center", fontSize: 18, color: "#fff" }}>
          Resubmit
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Error;
