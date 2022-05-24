import { View, Text } from "react-native";
import Carousel from "react-native-snap-carousel";

import React from "react";
import styles from "./styles";

const Welcome = ({ navigation }) => {
  return (
    <View>
      <Carousel layout={"default"} />
    </View>
  );
};

export default Welcome;
