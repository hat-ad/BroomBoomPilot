import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import metrics from "../../Utility/metrics";
import style from "./style";

const RiderDetails = () => {
  return (
    <View style={{ paddingHorizontal: 30, paddingVertical: 20 }}>
      <View style={{ alignItems: "center" }}>
        <Image
          style={{
            height: 100,
            width: 100,
          }}
          resizeMode="contain"
          source={require("../../../assets/logoBigBlack.png")}
        />
        <Image
          style={{
            marginTop: metrics.verticalScale(10),
            height: 100,
            width: 100,
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
        <Text style={{ marginTop: metrics.verticalScale(8), color: "#347EEA" }}>
          Jio Phone Developer
        </Text>
      </View>
      <View
        style={{
          marginTop: metrics.verticalScale(20),
          borderWidth: 1,
          borderRadius: 10,
          paddingVertical: metrics.verticalScale(20),
          paddingHorizontal: metrics.scale(20),
          borderColor: "#7f7f7f",
        }}
      >
        <View style={style.cardCont}>
          <Text style={style.cardText}>Mobile</Text>
          <Text style={style.cardHead}>+91 9852136548</Text>
        </View>
        <View style={style.cardCont}>
          <Text style={style.cardText}>License validity</Text>
          <Text style={style.cardHead}>20/06/2036</Text>
        </View>
        <View style={style.cardCont}>
          <Text style={style.cardText}>Vehicle number</Text>
          <Text style={style.cardHead}>WB5543</Text>
        </View>
        <View style={[style.cardCont, { borderBottomWidth: 0 }]}>
          <Text style={style.cardText}>Driver License</Text>
          <Text style={style.cardHead}>KGB541FHSKJLS</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          paddingVertical: metrics.verticalScale(20),
          paddingHorizontal: metrics.scale(2),
        }}
      >
        <TouchableOpacity>
          <Text style={{ color: "#347EEA", fontSize: 18, fontWeight: "600" }}>
            View more
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginLeft: "auto",
            paddingHorizontal: metrics.scale(30),
            paddingVertical: metrics.verticalScale(10),
            borderWidth: 2,
            borderRadius: 30,
          }}
        >
          <Text>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RiderDetails;
