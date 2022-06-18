import React, { useState } from "react";
import { View } from "react-native";
import InitialScreen from "../../Modules/SearchCityModule/InitialScreen";
import ExpandedScreen from "../../Modules/SearchCityModule/ExpandedScreen";
import styleForInitialScreen from "./style/styleForInitialScreen";
import styleForExpandedScreen from "./style/styleForExpandedScreen";

const SearchCity = () => {
  const [state, setState] = useState(false);
  return (
    <View>
      {state ? (
        <ExpandedScreen styles={styleForExpandedScreen} />
      ) : (
        <InitialScreen setState={setState} styles={styleForInitialScreen} />
      )}
    </View>
  );
};

export default SearchCity;
