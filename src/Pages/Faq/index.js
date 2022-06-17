import React from "react";
import { View, TextInput } from "react-native";
import { List } from "react-native-paper";
import styles from "./styles";
const Faq = () => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search Issue"
        style={{
          width: "100%",
          borderWidth: 1,
          borderColor: "#333",
          borderRadius: 50,
          paddingHorizontal: 20,
          paddingVertical: 8,
          marginTop: 20,
          marginBottom: 30,
        }}
      />
      <View style={styles.accordionContainer}>
        <List.AccordionGroup>
          <List.Accordion
            title="Safety and Security"
            id="First"
            style={styles.accordion}
          >
            <List.Item title="First item" />
          </List.Accordion>

          <List.Accordion title="Services" id="Second" style={styles.accordion}>
            <List.Item title="First item" />
          </List.Accordion>

          <List.Accordion
            title="Account and App"
            id="Third"
            style={styles.accordion}
          >
            <List.Item title="Third item" />
          </List.Accordion>
          <List.Accordion
            title="Referrals"
            id="fourth"
            style={styles.accordion}
          >
            <List.Item title="Third item" />
          </List.Accordion>
          <List.Accordion
            title="Ride and Billing"
            id="fifth"
            style={styles.accordion}
          >
            <List.Item title="Third item" />
          </List.Accordion>
          <List.Accordion
            title="Payment and Wallets"
            id="sixth"
            style={styles.accordion}
          >
            <List.Item title="Third item" />
          </List.Accordion>
        </List.AccordionGroup>
      </View>
    </View>
  );
};

export default Faq;
