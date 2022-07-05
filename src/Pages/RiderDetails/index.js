import { View, Text, Image, TouchableOpacity, Share } from "react-native";
import React from "react";
import metrics from "../../Utility/metrics";
import styles from "./style";
import { useDispatch, useSelector } from "react-redux";
import { notify } from "../../Redux/Actions";
import Api from "../../Services";
import moment from "moment";
const RiderDetails = () => {
  const dispatch = useDispatch();
  const [referralCode, setReferralCode] = React.useState("");
  const user = useSelector((state) => state.auth.user);

  React.useEffect(() => {
    getReferralCode();
  }, []);

  const getReferralCode = async () => {
    try {
      const response = await Api.get("/refer/get-refer-token/");
      if (response.status === 1) {
        console.log(response.data.referral_code);
        setReferralCode(response.data.referral_code);
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      dispatch(notify({ type: "error", message: error.message }));
    }
  };
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: referralCode,
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
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Image
          style={{
            height: metrics.verticalScale(80),
            width: metrics.scale(150),
          }}
          resizeMode="contain"
          source={require("../../../assets/logoBigBlack.png")}
        />
        <Image
          style={{
            height: metrics.verticalScale(130),
            width: metrics.scale(125),
          }}
          source={require("../../../assets/Icon/UserIcon.png")}
        />
        <Text
          style={{
            marginTop: metrics.verticalScale(8),
            fontSize: 22,
            fontWeight: "600",
          }}
        >
          {user.pilot?.name}
        </Text>
        <Text
          style={{
            marginTop: metrics.verticalScale(8),
            fontSize: 12,
            color: "#347EEA",
          }}
        >
          {user.documents.vehicle_type}
        </Text>
      </View>
      <View style={styles.boxCard}>
        <View style={styles.cardCont}>
          <Text style={styles.cardText}>Mobile</Text>
          <Text style={styles.cardHead}>+91 {user.pilot.mobile}</Text>
        </View>
        <View style={styles.cardCont}>
          <Text style={styles.cardText}>License validity</Text>
          <Text style={styles.cardHead}>
            {moment(user.documents.createdAt).format("L")}
          </Text>
        </View>
        <View style={styles.cardCont}>
          <Text style={styles.cardText}>Vehicle number</Text>
          <Text style={styles.cardHead}>
            {user.documents.vehicle_RC_Number}
          </Text>
        </View>
        <View
          style={[styles.driveCont, { borderBottomWidth: 0, marginBottom: 0 }]}
        >
          <Text style={styles.cardText}>Driver License</Text>
          <Text style={styles.cardHead}>{user.documents.DL_number}</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          paddingVertical: metrics.verticalScale(20),
          paddingHorizontal: metrics.scale(2),
          justifyContent: "center",
        }}
      >
        {/* <TouchableOpacity>
          <Text
            style={{
              color: "#347EEA",
              fontSize: 15,
              fontWeight: "600",
              lineHeight: 40,
            }}
          >
            View more
          </Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          style={{
            marginLeft: "auto",
            paddingHorizontal: metrics.scale(30),
            paddingVertical: metrics.verticalScale(10),
            borderRadius: 50,
            backgroundColor: "#347EEA",
          }}
          onPress={onShare}
        >
          <Text style={{ color: "#fff" }}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RiderDetails;
