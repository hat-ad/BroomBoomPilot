import { View, Text } from "react-native";
import React from "react";
import { CircleCheckIcon } from "../../Utility/iconLibrary";

const GetReady = () => {
  return (
    <View>
      <View>
        <Text>Make sure you keep following document ready</Text>
        <View>
          <CircleCheckIcon />
          <Text>Driving License</Text>
        </View>
        <View>
          <CircleCheckIcon />
          <Text>Vehhicle Rc</Text>
        </View>
        <View>
          <CircleCheckIcon />
          <Text>Aadhaar/PAN card</Text>
        </View>
      </View>
      <View></View>
    </View>
  );
};

export default GetReady;
