import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { RadioButton } from "react-native-paper";
import styles from "./styles";

const Language = ({ navigation }) => {
  const [checked, setChecked] = useState(0);
  const option = [0, 2, 4];
  const lang = ["English", "Bengali", "Hindi", "Gujrathi", "Uriya", "bengali"];
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
        paddingHorizontal: 20,
      }}
    >
      <View style={styles.view}>
        <Text style={styles.text}>Select Language</Text>
        {option.map((val, index) => {
          return (
            <View style={styles.row} key={index}>
              <View style={styles.button}>
                <Text style={{ paddingTop: "5%" }}>{lang[val]}</Text>
                <RadioButton
                  value={val}
                  status={checked === val ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked(val);
                  }}
                  color={"black"}
                />
              </View>
              <View style={styles.button}>
                <Text style={{ paddingTop: "5%" }}>{lang[val + 1]}</Text>
                <RadioButton
                  value={val + 1}
                  status={checked === val + 1 ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked(val + 1);
                  }}
                  color={"black"}
                />
              </View>
            </View>
          );
        })}
      </View>
      <View style={{ alignItems: "flex-end" }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("SignUp")}
          style={{
            padding: 10,
            borderWidth: 1,
            borderRadius: 50,
            width: "100%",
            marginBottom: 40,
          }}
        >
          <Text
            style={{ textAlign: "center", fontWeight: "500", fontSize: 16 }}
          >
            Done
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Language;
