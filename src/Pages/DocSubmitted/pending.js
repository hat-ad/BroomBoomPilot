import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import styles from "./style";

const Pending = () => {
  return (
    <View style={styles.container}>
      <View style={{ width: "100%", alignItems: "center" }}>
        <Text style={styles.text}>
          You have successfully submitted all required documents
        </Text>
        <Image
          style={styles.img}
          source={require("../../../assets/success.png")}
        />
        <Text style={styles.textP}>
          {" "}
          We are now verifying your submitted details
        </Text>
      </View>
      <View style={styles.loader}>
        <Image source={require("../../../assets/BigLoader.png")} />
      </View> 
    </View>
  );
};

export default Pending;
