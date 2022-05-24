import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { RadioButton } from "react-native-paper";
import styles from "./styles";

const Language = () => {
  const [checked, setChecked] = useState(0);
  const option = [0, 2, 4];
  const lang = ["English", "Bengali", "Hindi", "Gujrathi", "Uriya", "bengali"];
  return (
    <View>
      <Text style={styles.text}>Select Language</Text>
      <View style={styles.view}>
        {option.map((val) => {
          return (
            <View style={styles.row}>
              <View style={styles.button}>
                <Text style={{ paddingTop: "5%" }}>{lang[val]}</Text>
                <RadioButton
                  value={val}
                  status={checked === val ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked(val);
                  }}
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
                />
              </View>
            </View>
          );
        })}
        <Button title="Done" />
      </View>
    </View>
  );
};
export default Language;
