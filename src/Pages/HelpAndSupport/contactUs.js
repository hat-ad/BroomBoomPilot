import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import styles from "./style";
import metrics from "../../Utility/metrics";
import { SearchIcon, ArrowRight } from "../../Utility/iconLibrary";

const ContactUs = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.search}>
        <SearchIcon size={24} style={{ paddingHorizontal: metrics.scale(20) }} />
        <Text style={{ fontSize: 16, color: "#828282", fontWeight: "600" }}>Search Issue</Text>
      </TouchableOpacity>
      <View style={styles.recentTickets}>
        <View style={{ flexDirection: "row", width: "100%" }}>
          <Text style={{ color: "#333", fontSize: 18, fontWeight: "700" }}>Your Recent Tickets</Text>
          <TouchableOpacity style={styles.viewAll}>
            <Text style={{ color: "#347EEA", fontSize: 12, fontWeight: "700" }}>View all</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ticketDetails}>
          <View>
            <Text style={{ fontSize: 15, color: "#333", fontWeight: "800" }}>Ticket related to wallet</Text>
            <Text style={{ fontSize: 13, color: "#aaa", fontWeight: "600" }}>Issue with my wallet</Text>
          </View>
          <View style={{ marginLeft: "auto" }}>
            <Text style={{ color: "#AAAAAA", fontWeight: "700" }}>6:33 PM</Text>
            <Text style={{ color: "#00E94F", alignSelf: "flex-end", fontWeight: "700" }} >Solved</Text>
          </View>
        </View>
      </View>

      <View style={styles.selectIssue}>
        <View style={{ width: "100%" }}>
          <Text style={{ color: "#333", fontSize: 18, fontWeight: "700" }}>Your Issue</Text>
          <Text style={{ color: "#AAAAAA", fontSize: 12, fontWeight: "700" }}>Select what types of issue are you facing</Text>
        </View>
        <View style={styles.ticketDetails}>
          <View>
            <Text style={{ fontSize: 15, color: "#333", fontWeight: "800" }}>Ticket related to wallet</Text>
            <Text style={{ fontSize: 13, color: "#aaa", fontWeight: "600" }}>Issue with my wallet</Text>
          </View>
          <View style={{ marginLeft: "auto" }}>
            <Text style={{ color: "#AAAAAA", fontWeight: "700" }}>6:33 PM</Text>
            <Text style={{ color: "#00E94F", alignSelf: "flex-end", fontWeight: "700" }} >Solved</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ContactUs;
