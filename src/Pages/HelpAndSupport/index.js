import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import styles from "./style";
import metrics from "../../Utility/metrics";
// import Search from "../../Utility/iconLibrary";

const HelpAndSupport = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ flexDirection: "row" }}>
        {/* <Search /> */}
        <Text style={{ fontSize: 24 }}>Search Issue</Text>
      </TouchableOpacity>
      <Text style={styles.anchorTag}>
        For more information read our{" "}
        <Text style={{ color: "#347EEA" }}> terms and condition </Text>
        and <Text style={{ color: "#347EEA" }}> privacy policy </Text>
        of Broom Boom
      </Text>
    </View>
  );
};

export default HelpAndSupport;
