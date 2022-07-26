import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import styles from "./style";
import { List } from "react-native-paper";

const ViewAllTickets = () => {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
  ];

  const listItem = ({ item }) => (
    // <List.AccordionGroup>
    <List.Accordion
      title="HOW CAN I BOOK A RIDE ??"
      id="First"
      // titleNumberOfLines={5}
      // style={styles.accordion}
    >
      <List.Item
        // description="PICKUP LOCATION > DESTINATION > REQUEST BB > BOOKED (NOTIFIED WHEN ACCEPTED BY PILOT)"
        description="PICKUP LOCATION > DESTINATION > REQUEST BB > BOOKED (NOTIFIED WHEN ACCEPTED BY PILOT)"
        descriptionNumberOfLines={5}
      />
    </List.Accordion>
  );
  return (
    <View style={styles.container}>
      <View style={styles.recentTickets}>
        <View style={{ flexDirection: "row", width: "100%" }}>
          <Text style={{ color: "#333", fontSize: 18, fontWeight: "700" }}>
            Your Recent Tickets
          </Text>
        </View>
        <FlatList
          data={DATA}
          renderItem={listItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default ViewAllTickets;
