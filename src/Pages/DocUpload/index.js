import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
// import { SteeringIcon } from "../../Utility/iconLibrary";
import metrics from "../../Utility/metrics";
import {
  MapMarkerIcon,
  ArrowRight,
  AddressCardIcon,
} from "../../Utility/iconLibrary";
import { useDispatch, useSelector } from "react-redux";
import Api from "../../Services";
import { notify } from "../../Redux/Actions";

const DocUpload = ({ navigation, route }) => {
  const user = useSelector((state) => state.auth.user);
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const onSubmit = async () => {
    try {
      const response = await Api.get("/pilot/submit-document");
      if (response.status === 1) {
        navigation.navigate("pending");
        dispatch(notify({ type: "success", message: response.message }));
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      dispatch(notify({ type: "error", message: error.message }));
    }
  };

  return (
    <View style={[styles.container, { paddingRight: metrics.scale(20) }]}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: metrics.verticalScale(20),
          paddingBottom: metrics.verticalScale(10),
          borderBottomWidth: 1,
          borderBottomColor: "#828282",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MapMarkerIcon
            style={{ marginRight: 10 }}
            size={24}
            color={"#828282"}
          />
          <Text>{user.details.city}</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("searchCity")}>
          <Text style={{ color: "#347EEA" }}>Change</Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          fontSize: 22,
          fontWeight: "700",
          textAlign: "center",
          width: "100%",
          marginBottom: metrics.scale(40),
        }}
      >
        Let's upload the following documents to activate your account
      </Text>
      <View>
        <TouchableOpacity
          style={styles.boxBtn}
          onPress={() => navigation.navigate("drivingLicense")}
        >
          <Image
            style={{ width: 50, height: 32 }}
            source={require("../../../assets/Icon/DriveLic.png")}
          />
          <Text style={styles.box}>Driving License</Text>
          <ArrowRight style={{ alignSelf: "center" }} size={20} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.boxBtn}
          onPress={() => navigation.navigate("vehicleRc")}
        >
          <Image source={require("../../../assets/Icon/VehicleRC.png")} />
          <Text style={styles.box}>Vehicle RC</Text>
          <ArrowRight style={{ alignSelf: "center" }} size={20} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.boxBtn}
          onPress={() => navigation.navigate("aadharOrPanUpload")}
        >
          <Image source={require("../../../assets/Icon/Aadhar.png")} />
          <Text style={styles.box}>Aadhaar/PAN Card</Text>
          <ArrowRight style={{ alignSelf: "center" }} size={20} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.boxBtn}
          onPress={() => navigation.navigate("profileDetails")}
        >
          <AddressCardIcon size={43} />
          <Text style={styles.box}>Profile Details</Text>
          <ArrowRight style={{ alignSelf: "center" }} size={20} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.submit} onPress={onSubmit}>
        <Text style={styles.centerText}>Proceed</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DocUpload;
