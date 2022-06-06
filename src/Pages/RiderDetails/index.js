import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import metrics from "../../Utility/metrics";
import styles from "./style";

const RiderDetails = () => {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Image
          style={{
            height: metrics.verticalScale(80),
            width: metrics.scale(150),
          }}
          resizeMode="contain"
          source={require("../../../assets/logoBigBlack.png")}
        />
        <Image
          style={{
            height: metrics.verticalScale(130),
            width: metrics.scale(125),
          }}
          source={require("../../../assets/Icon/UserIcon.png")}
        />
        <Text
          style={{
            marginTop: metrics.verticalScale(8),
            fontSize: 22,
            fontWeight: "600",
          }}
        >
          Ramesh Kr. Paul
        </Text>
        <Text
          style={{
            marginTop: metrics.verticalScale(8),
            fontSize: 12,
            color: "#347EEA",
          }}
        >
          Pulser 250
        </Text>
      </View>
      <View style={styles.boxCard}>
        <View style={styles.cardCont}>
          <Text style={styles.cardText}>Mobile</Text>
          <Text style={styles.cardHead}>+91 9852136548</Text>
        </View>
        <View style={styles.cardCont}>
          <Text style={styles.cardText}>License validity</Text>
          <Text style={styles.cardHead}>20/06/2036</Text>
        </View>
        <View style={styles.cardCont}>
          <Text style={styles.cardText}>Vehicle number</Text>
          <Text style={styles.cardHead}>WB5543</Text>
        </View>
        <View
          style={[styles.driveCont, { borderBottomWidth: 0, marginBottom: 0 }]}
        >
          <Text style={styles.cardText}>Driver License</Text>
          <Text style={styles.cardHead}>KGB541FHSKJLS</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          paddingVertical: metrics.verticalScale(20),
          paddingHorizontal: metrics.scale(2),
          justifyContent: "center",
        }}
      >
        <TouchableOpacity>
          <Text
            style={{
              color: "#347EEA",
              fontSize: 15,
              fontWeight: "600",
              lineHeight: 40,
            }}
          >
            View more
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginLeft: "auto",
            paddingHorizontal: metrics.scale(30),
            paddingVertical: metrics.verticalScale(10),
            borderRadius: 50,
            backgroundColor: "#347EEA",
          }}
        >
          <Text style={{ color: "#fff" }}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RiderDetails;
