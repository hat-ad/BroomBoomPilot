import { View, Text, Button, Alert } from "react-native";
import styles from "./styles";

export const TextSeparator = () => {
  return (
    <View
      style={{ flexDirection: "row", paddingTop: 5, paddingHorizontal: 15 }}
    >
      <View style={styles.textSeparator} />
      <Text style={{ alignSelf: "center", paddingHorizontal: 5, fontSize: 14 }}>
        25 May 2021
      </Text>
      <View style={styles.textSeparator} />
    </View>
  );
};
export default TextSeparator;
