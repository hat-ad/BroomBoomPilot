import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./style";
import { logout } from "../../Redux/Actions";
import { useDispatch } from "react-redux";

const Pending = () => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={{ width: "100%", alignItems: "center" }}>
        <Text style={styles.text}>
          You have successfully submitted all required documents
        </Text>
        <Image
          style={styles.img}
          source={require("../../../assets/pending.png")}
        />
        <Text style={styles.textP}>
          {" "}
          We are now verifying your submitted details
        </Text>
      </View>
      <TouchableOpacity
        style={styles.loader}
        onPress={() => dispatch(logout())}
      >
        <Text style={{ fontSize: 18 }}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Pending;
