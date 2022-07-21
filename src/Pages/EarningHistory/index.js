import { View, Button, ScrollView } from "react-native";

import styles from "./styles";
import Card from "./card";
import TextSeparator from "./textSeparator";
import { useState } from "react";

const Index = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Button
          title="Filter"
          color="#F5C001"
          onPress={() => {
            console.log("clicked me");
          }}
        ></Button>

        <TextSeparator />
        <View style={{ alignItems: "center", paddingTop: 5 }}>
          <Card />
          <Card />
          <TextSeparator />
          <Card />
        </View>
      </View>
    </ScrollView>
  );
};

export default Index;
