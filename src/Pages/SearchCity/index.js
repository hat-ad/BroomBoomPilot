import React, { useState } from "react";
import { View } from "react-native";
import InitialScreen from "../../Modules/SearchCityModule/InitialScreen";
import ExpandedScreen from "../../Modules/SearchCityModule/ExpandedScreen";

const SearchCity = ({ navigation }) => {
  const [state, setState] = useState(false);
  const [city, setCity] = useState("");
  return (
    <View style={{ flex: 1 }}>
      {state ? (
        <ExpandedScreen
          navigation={navigation}
          setState={setState}
          setCity={setCity}
        />
      ) : (
        <InitialScreen
          setState={setState}
          city={city}
          navigation={navigation}
        />
      )}
    </View>
  );
};

export default SearchCity;
