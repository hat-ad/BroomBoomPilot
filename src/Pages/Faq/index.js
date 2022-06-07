import React from "react";
import { View, Text } from "react-native";
import { List } from "react-native-paper";
import styles from "./styles";
const Faq = () => {
  return (
    <View style={styles.container}>
      <View style={styles.accordionContainer}>
        <List.AccordionGroup>
          <List.Accordion
            title="FirstAccordion"
            id="First"
            style={styles.accordion}
          >
            <List.Item title="First item" />
          </List.Accordion>

          <List.Accordion
            title="SecondAccordion"
            id="Second"
            style={styles.accordion}
          >
            <List.Item title="First item" />
          </List.Accordion>

          <List.Accordion
            title="ThirdAccordion"
            id="Third"
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
