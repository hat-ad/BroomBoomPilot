import { Image, View, Text, TouchableOpacity, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";

import React from "react";

import metrics from "../../Utility/metrics";

export const SLIDER_WIDTH = Dimensions.get("window").width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const Welcome = ({ navigation }) => {
  const isCarousel = React.useRef(null);
  const CarouselCardItem = ({ item, index }) => {
    return (
      <View
        style={{
          width: ITEM_WIDTH,
          paddingBottom: 40,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.29,
          shadowRadius: 4.65,
          elevation: 7,
        }}
        key={index}
      >
        <Image
          source={{ uri: item.imgUrl }}
          style={{ height: 200, width: ITEM_WIDTH, backgroundColor: "white" }}
        />
        <View
          style={{
            marginTop: 32,
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          <Text
            style={{
              fontSize: 22,
              fontWeight: "700",
              marginBottom: 10,
              padding: metrics.scale(10),
            }}
          >
            {item.title}
          </Text>
          {/* <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              textAlign: "center",
              width: "90%",
            }}
          >
            risus tincidunt maximus Vestibulum odio scelerisque sollicitudin.
            sed tincidunt eget non. elit In vitae Vestibulum tortor.
          </Text> */}
        </View>
      </View>
    );
  };
  const data = [
    {
      title: "Bengal's Own cab",
      // body: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
      imgUrl: "https://broomboomimages.s3.ap-south-1.amazonaws.com/Group.png",
    },
    {
      title: "Bengal's Own Bike Taxi",
      // body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
      imgUrl:
        "https://broomboomimages.s3.ap-south-1.amazonaws.com/Order+Done+1.png",
    },
    {
      title: "Be a BroomBoom Pilot",
      // body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
      imgUrl:
        "https://broomboomimages.s3.ap-south-1.amazonaws.com/Contact+Befor+Order+Received+1.png",
    },
  ];

  return (
    <View style={{ padding: 10, backgroundColor: "white", flex: 1 }}>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Image
          style={{ height: 54, width: 54, backgroundColor: "white" }}
          source={{
            uri: "https://broomboomimages.s3.ap-south-1.amazonaws.com/1657284315179_logoSmall.png",
          }}
        />
      </View>

      <View style={{ marginTop: 32, alignItems: "center" }}>
        <Carousel
          layout="tinder"
          loop={true}
          autoplay={true}
          layoutCardOffset={9}
          ref={isCarousel}
          data={data}
          renderItem={CarouselCardItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          inactiveSlideShift={0}
          useScrollView={true}
        />
      </View>

      {/* <View style={{ marginTop: 32, alignItems: "center" }}>
        <Text style={{ fontSize: 22, fontWeight: "700", marginBottom: 10 }}>
          Welcome Note
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
            textAlign: "center",
            paddingHorizontal: 48,
          }}
        >
          risus tincidunt maximus Vestibulum odio scelerisque sollicitudin. sed
          tincidunt eget non. elit In vitae Vestibulum tortor.
        </Text>
      </View> */}

      <View style={{ marginTop: 67, alignItems: "center" }}>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            width: "100%",
            paddingVertical: 15,
            borderRadius: 20,
          }}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={{ textAlign: "center" }}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
