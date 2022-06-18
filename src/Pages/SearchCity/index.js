import React, { useState } from "react";
import { View } from "react-native";
import InitialScreen from "../../Modules/SearchCityModule/InitialScreen";
import ExpandedScreen from "../../Modules/SearchCityModule/ExpandedScreen";

const SearchCity = () => {
  const [state, setState] = useState(false);
  return (
    <View>
      {state ? <ExpandedScreen /> : <InitialScreen setState={setState} />}
    </View>
  );
};

export default SearchCity;
