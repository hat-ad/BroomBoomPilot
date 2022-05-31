import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import styles from "./styles";
import { CopyIcon, GiftIcon } from "../../Utility/iconLibrary";

const ReferAndEarn = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Earn upto ₹100 per friend you invite to Broom Boom
      </Text>
      <Image
        source={require("../../../assets/referAndEarn.png")}
        style={styles.img}
        resizeMode="contain"
      />
      <Text style={styles.subTitle}>
        Copy the code and send it to friend and earn both
      </Text>
      <View style={styles.copyCodeContainer}>
        <Text style={styles.copyCodeText}>CHRHS</Text>
        <TouchableOpacity>
          <CopyIcon />
        </TouchableOpacity>
      </View>
      <View style={styles.inviteTextContainer}>
        <View style={styles.row}>
          <GiftIcon />
          <Text style={styles.inviteText}>Invite Friends to Broom Boom</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.link}>Invite</Text>
        </TouchableOpacity>
      </View>
      <View style={{ paddingHorizontal: 30 }}>
        <Text style={styles.stepsTitle}>Steps</Text>
        <View style={styles.stepsBorder1} />
        <View style={styles.row}>
          <View style={styles.stepsCounterContainer}>
            <Text style={styles.stepsCounterText}>1</Text>
          </View>
          <View>
            <Text style={styles.stepsCounterTitle}>
              Your friend registers with us
            </Text>
            <Text style={styles.mutedText}>Friend earns ₹0 </Text>
          </View>
        </View>
        <View style={styles.stepsBorder2} />
        <View style={styles.row}>
          <View style={styles.stepsCounterContainer}>
            <Text style={styles.stepsCounterText}>2</Text>
          </View>
          <View>
            <Text style={styles.stepsCounterTitle}>
              Your friend completes first order
            </Text>
            <Text style={styles.mutedText}>
              within 7 working days of registration
            </Text>
            <View style={styles.chipTextContainer}>
              <Text style={styles.chipTextMuted}>Friend earns ₹50</Text>
              <Text style={styles.chipText}>You earn ₹100</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ReferAndEarn;
