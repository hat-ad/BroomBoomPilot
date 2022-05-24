import { Image, View, Text, TouchableOpacity } from "react-native";
import Carousel from "react-native-snap-carousel";

import React from "react";
import LogoSmall from "../../../assets/logoSmall.png";


const Welcome = ({ navigation }) => {
  return (
    <View style={{ padding: 10 }}>
      <View style={{
        alignItems: "center"
      }}>

        <Image style={{ height: 54, width: 54 }} source={LogoSmall} />
      </View>

      <View style={{ marginTop: 32, alignItems: "center" }}>
        <Image style={{ height: 461, width: 330 }} source={require("../../../assets/Card.png")} />
      </View>

      <View style={{ marginTop: 32, alignItems: "center" }}>
        <Text style={{ fontSize: 22, fontWeight: "700", marginBottom: 10 }}>Welcome Note</Text>
        <Text style={{ fontSize: 16, fontWeight: "500", textAlign: "center", paddingHorizontal: 48 }}>risus tincidunt maximus Vestibulum odio scelerisque sollicitudin. sed tincidunt eget non. elit In vitae Vestibulum tortor.</Text>
      </View>

      <View style={{marginTop: 67, alignItems: "center"}}>
        <TouchableOpacity style={{borderWidth: 1,width:"100%", paddingVertical:15, borderRadius: 20}}>
          <Text style={{textAlign: "center"}}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>

  );
};

export default Welcome;
