import { View, Text, TouchableOpacity, TextInput } from "react-native";
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
            <Text style={{ fontSize: 14, color: "#333", fontWeight: "600" }}>Ticket related to wallet</Text>
            <Text style={{ fontSize: 12, color: "#aaa", fontWeight: "400" }}>Issue with my wallet</Text>
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
          <Text style={{ color: "#AAAAAA", fontSize: 12, fontWeight: "500" }}>Select what types of issue are you facing</Text>
        </View>
        <View style={styles.issueSelect}>
          <Text style={{ color: "#ccc", fontSize: 13 }}>No documents are selected</Text>
        </View>
      </View>

      <View style={styles.detailIssue}>
        <View style={{ width: "100%" }}>
          <Text style={{ color: "#333", fontSize: 18, fontWeight: "700" }}>Describe Your Issue</Text>
          <Text style={{ color: "#AAAAAA", fontSize: 12, fontWeight: "500" }}>Write us something about your issues</Text>
        </View>
        <View style={styles.issueDetails}>
          <TextInput multiline numberOfLines={4} keyboardType="default" placeholder="Write here something" />
        </View>
      </View>

      <TouchableOpacity style={styles.Btn}>
        <Text style={styles.BtnText}>Submit</Text>
      </TouchableOpacity>

    </View>
  );
};

export default ContactUs;
