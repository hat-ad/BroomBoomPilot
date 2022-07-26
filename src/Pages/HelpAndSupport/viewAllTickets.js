import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import styles from "./style";
import { ListAccordion, ListItem, Checkbox } from "react-native-paper";

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
    <ListAccordion
      title={() => (
        <TouchableOpacity>
          <View style={styles.ticketDetails}>
            <View>
              <Text style={{ fontSize: 14, color: "#333", fontWeight: "600" }}>
                Ticket related to wallet
              </Text>
              <Text style={{ fontSize: 12, color: "#aaa", fontWeight: "400" }}>
                Issue with my wallet
              </Text>
            </View>
            <View style={{ marginLeft: "auto" }}>
              <Text style={{ color: "#AAAAAA", fontWeight: "700" }}>
                6:33 PM
              </Text>
              <Text
                style={{
                  color: "#00E94F",
                  alignSelf: "flex-end",
                  fontWeight: "700",
                }}
              >
                Solved
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
      icon="folder"
    >
      <ListItem title="First item" />
      <ListItem title="Second item" />
    </ListAccordion>
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
