import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import styles from "./style";
import metrics from "../../Utility/metrics";
import { SearchIcon, ArrowRight } from "../../Utility/iconLibrary";

const HelpAndSupport = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.search}>
        <SearchIcon
          size={24}
          style={{ paddingHorizontal: metrics.scale(20) }}
        />
        <Text style={{ fontSize: 16, color: "#828282", fontWeight: "600" }}>
          Search Issue
        </Text>
      </TouchableOpacity>

      <View style={styles.cardCont}>
        <View style={styles.cards}>
          <View>
            <Text style={{ fontSize: 16, color: "#333", fontWeight: "700" }}>
              FAQs
            </Text>
            <Text style={{ fontSize: 12, color: "#aaa", fontWeight: "600" }}>
              Some long long text here{" "}
            </Text>
            <TouchableOpacity style={{ marginTop: metrics.verticalScale(10) }}>
              <Text style={{ fontSize: 10, color: "#347eea" }}>
                Click Here <ArrowRight size={10} style={{ color: "#347eea" }} />
              </Text>
            </TouchableOpacity>
          </View>
          <Image
            source={require("../../../assets/Icon/faqIcon.png")}
            style={{ width: 44, height: 44, marginLeft: "auto" }}
          />
        </View>

        <View style={styles.cards}>
          <View>
            <Text style={{ fontSize: 16, color: "#333", fontWeight: "700" }}>
              Payment and Wallets
            </Text>
            <Text style={{ fontSize: 12, color: "#aaa", fontWeight: "600" }}>
              Your Payments and Wallet balance
            </Text>
            <TouchableOpacity style={{ marginTop: metrics.verticalScale(10) }}>
              <Text style={{ fontSize: 10, color: "#347eea" }}>
                Click Here <ArrowRight size={10} style={{ color: "#347eea" }} />
              </Text>
            </TouchableOpacity>
          </View>
          <Image
            source={require("../../../assets/Icon/walletIcon.png")}
            style={{ width: 44, height: 44, marginLeft: "auto" }}
          />
        </View>

        <View style={styles.cards}>
          <View>
            <Text style={{ fontSize: 16, color: "#333", fontWeight: "700" }}>
              Contact 24x7 Help
            </Text>
            <Text style={{ fontSize: 12, color: "#aaa", fontWeight: "600" }}>
              Our excutive will help solve your problem
            </Text>
            <TouchableOpacity style={{ marginTop: metrics.verticalScale(10) }}>
              <Text style={{ fontSize: 10, color: "#347eea" }}>
                Click Here <ArrowRight size={10} style={{ color: "#347eea" }} />
              </Text>
            </TouchableOpacity>
          </View>
          <Image
            source={require("../../../assets/Icon/contactIcon.png")}
            style={{ width: 44, height: 44, marginLeft: "auto" }}
          />
        </View>
      </View>

      <Text style={styles.anchorTag}>
        For more information read our{" "}
        <Text style={{ color: "#347EEA" }}> terms and condition </Text>
        and <Text style={{ color: "#347EEA" }}> privacy policy </Text>
        of Broomboom
      </Text>
    </View>
  );
};

export default HelpAndSupport;
