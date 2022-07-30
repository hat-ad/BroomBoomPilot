import { View, Text, TouchableOpacity, Image, Linking } from "react-native";
import React, { useState } from "react";
import styles from "./style";
import metrics from "../../Utility/metrics";
import { SearchIcon, ArrowRight } from "../../Utility/iconLibrary";

const HelpAndSupport = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity style={styles.search}>
        <SearchIcon
          size={24}
          style={{ paddingHorizontal: metrics.scale(20) }}
        />
        <Text style={{ fontSize: 16, color: "#828282", fontWeight: "600" }}>
          Search Issue
        </Text>
      </TouchableOpacity> */}

      <View style={styles.cardCont}>
        <View style={styles.cards}>
          <View>
            <Text style={{ fontSize: 16, color: "#333", fontWeight: "700" }}>
              FAQs
            </Text>
            <Text style={{ fontSize: 12, color: "#aaa", fontWeight: "600" }}>
              Get answers to your general queries.
            </Text>
            <TouchableOpacity
              style={{ marginTop: metrics.verticalScale(10) }}
              onPress={() => navigation.navigate("faq")}
            >
              <Text style={{ fontSize: 10, color: "#347eea" }}>
                Click Here <ArrowRight size={10} style={{ color: "#347eea" }} />
              </Text>
            </TouchableOpacity>
          </View>
          <Image
            source={{
              uri: "https://broomboomimages.s3.ap-south-1.amazonaws.com/1657284315146_faqIcon.png",
            }}
            style={{ width: 44, height: 44, marginLeft: "auto" }}
          />
        </View>

        {/* <View style={styles.cards}>
          <View>
            <Text style={{ fontSize: 16, color: "#333", fontWeight: "700" }}>
              Payment and Wallets
            </Text>
            <Text style={{ fontSize: 12, color: "#aaa", fontWeight: "600" }}>
              Your Payments and Wallet balance
            </Text>
            <TouchableOpacity
              style={{ marginTop: metrics.verticalScale(10) }}
              onPress={() => navigation.navigate("payment")}
            >
              <Text style={{ fontSize: 10, color: "#347eea" }}>
                Click Here <ArrowRight size={10} style={{ color: "#347eea" }} />
              </Text>
            </TouchableOpacity>
          </View>
          <Image
            source={{
              url: "https://broomboomimages.s3.ap-south-1.amazonaws.com/1657284315300_walletIcon.png",
            }}
            style={{ width: 44, height: 44, marginLeft: "auto" }}
          />
        </View>

         */}
        <View style={styles.cards}>
          <View>
            <Text style={{ fontSize: 16, color: "#333", fontWeight: "700" }}>
              Contact 24x7 Help
            </Text>
            <Text style={{ fontSize: 12, color: "#aaa", fontWeight: "600" }}>
              Connect with Broomboom team
            </Text>
            <TouchableOpacity
              style={{ marginTop: metrics.verticalScale(10) }}
              onPress={() => Linking.openURL(`tel:${8478056064}`)}
              // onPress={() => navigation.navigate("contactUs")}
            >
              <Text style={{ fontSize: 10, color: "#347eea" }}>
                Click Here <ArrowRight size={10} style={{ color: "#347eea" }} />
              </Text>
            </TouchableOpacity>
          </View>
          <Image
            source={{
              uri: "https://broomboomimages.s3.ap-south-1.amazonaws.com/1657284315133_contactIcon.png",
            }}
            style={{ width: 44, height: 44, marginLeft: "auto" }}
          />
        </View>
      </View>

      <Text style={styles.anchorTag}>
        For more information read
        <Text style={{ color: "#347EEA" }}> Terms & Conditions </Text>
        and <Text style={{ color: "#347EEA" }}> Privacy Policies </Text>
        of BroomBoom Pilot
      </Text>
    </View>
  );
};

export default HelpAndSupport;
