import { View, Text, Image } from "react-native";
import React from "react";
import { CircleCheckIcon } from "../../Utility/iconLibrary";

const styles = {
  yel: {
    color: "#333",
    fontSize: 22,
    fontWeight: "700",
    marginLeft: 26,
    lineHeight: 25,
  }
}

const GetReady = () => {
  return (
    <View style={{ padding: 10,alignItems: "center",flex:1,justifyContent: "space-between"}}>
      <View style={{ width: "100%",alignItems: "center" }}>
        <Text style={{ fontSize: 22, textAlign: "center", fontWeight: "400", width: "65%", marginBottom: 92, marginTop: 64 }}>Make sure you keep following document ready</Text>
        <View>
          <View style={{flexDirection:"row", marginBottom:50}}>
            <CircleCheckIcon color={"#F5C001"} size={22}/>
            <Text style={styles.yel}>Driving License</Text>
          </View>
          <View style={{flexDirection:"row", marginBottom:50}}>
            <CircleCheckIcon color={"#F5C001"} size={22} />
            <Text style={styles.yel}>Vehhicle Rc</Text>
          </View>
          <View style={{flexDirection:"row", marginBottom:50}}>
            <CircleCheckIcon  color={"#F5C001"} size={22}/>
            <Text style={styles.yel}>Aadhaar/PAN card</Text>
          </View>
        </View>
      </View>
      <View style={{marginBottom: 50}}>
        <Image source={require("../../../assets/BigLoader.png")} />
      </View>
    </View>
  );
};

export default GetReady;
