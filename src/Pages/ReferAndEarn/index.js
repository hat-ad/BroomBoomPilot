import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Share,
} from "react-native";
import React from "react";
import styles from "./styles";
import { CopyIcon, GiftIcon } from "../../Utility/iconLibrary";
import { useDispatch } from "react-redux";
import { notify } from "../../Redux/Actions";
import Api from "../../Services";
import * as Clipboard from "expo-clipboard";

const ReferAndEarn = () => {
  const dispatch = useDispatch();
  const [referralCode, setReferralCode] = React.useState("");
  React.useEffect(() => {
    getReferralCode();
  }, []);
  const getReferralCode = async () => {
    try {
      const response = await Api.get("/refer/get-refer-token/");
      if (response.status === 1) {
        setReferralCode(response.data.referral_code);
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      dispatch(notify({ type: "error", message: error.message }));
    }
  };

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(
      `Hurry! You're invited to be a Broomboom Pilot.Please use the below coupon code during registration and earn broomboom coins.Referral Code: ${referralCode}`
    );
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `Hurry! You're invited to be a Broomboom Pilot.Please use the below coupon code during registration and earn broomboom coins.Referral Code: ${referralCode}`,
      });
      // if (result.action === Share.sharedAction) {
      //   if (result.activityType) {
      //     // shared with activity type of result.activityType
      //   } else {
      //     // shared
      //   }
      // } else if (result.action === Share.dismissedAction) {
      //   // dismissed
      // }
    } catch (error) {
      dispatch(notify({ type: "error", message: error.message }));
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Earn upto ₹100 per friend you invite to Broomboom
      </Text>
      <Image
        source={{
          uri: "https://broomboomimages.s3.ap-south-1.amazonaws.com/1657284315253_referAndEarn.png",
        }}
        style={styles.img}
        resizeMode="contain"
      />
      <Text style={styles.subTitle}>
        Copy the code and send it to friend and earn both
      </Text>
      <View style={styles.copyCodeContainer}>
        <Text style={styles.copyCodeText}>{referralCode}</Text>
        <TouchableOpacity onPress={copyToClipboard}>
          <CopyIcon />
        </TouchableOpacity>
      </View>
      <View style={styles.inviteTextContainer}>
        <View style={styles.row}>
          <GiftIcon />
          <Text style={styles.inviteText}>Invite Friends to Broomboom</Text>
        </View>
        <TouchableOpacity onPress={onShare}>
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
