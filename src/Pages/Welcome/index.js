import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Carousel from "react-native-snap-carousel";

const Welcome = ({ navigation }) => {
  return (
    <View>
      <Image source={require("./assets/logoSmall.svg")} />
      <Carousel
        data={[]}
        renderItem={<Text>hello</Text>}
        sliderWidth={"80%"}
        itemWidth={10}
      />
      <Text>Welcome Note</Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        totam sapiente accusantium, atque quidem dolor culpa, cupiditate tenetur
        voluptatem officiis quibusdam earum explicabo eligendi dolore tempore
        exercitationem. Fugiat, voluptates voluptatum.
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate("DrivingLicence")}>
        <Text>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;
