import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import styles from "./style";

const Approve = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ width: "100%", alignItems: "center" }}>
        <Image
          style={styles.GreenImg}
          source={{
            uri: "https://broomboomimages.s3.ap-south-1.amazonaws.com/1657284315157_greenMark.png",
          }}
        />
        <Text style={styles.approveText}>You're ready to go</Text>
        <Text style={styles.approveP}>
          All documents have been verified hit proceed to start the journey with
          BroomBoom
        </Text>
        <Image
          style={styles.ApprovedImg}
          source={{
            uri: "https://broomboomimages.s3.ap-south-1.amazonaws.com/1657284315128_Approved.png",
          }}
        />
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("error")}
      >
        <Text style={{ textAlign: "center", fontSize: 18, color: "#fff" }}>
          Proceed
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Approve;
