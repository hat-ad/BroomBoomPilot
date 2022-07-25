import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { useDispatch } from "react-redux";
import styles from "../../Pages/SearchCity/style/styleForInitialScreen";
import { notify } from "../../Redux/Actions";
import { SearchIcon, GroupIcon, ArrowIcon } from "../../Utility/iconLibrary";

const InitialScreen = ({ setState, city, navigation }) => {
  const dispatch = useDispatch();
  const onNext = () => {
    if (city) {
      navigation.navigate("docUpload");
    } else {
      dispatch(notify({ type: "error", message: "Please select a city" }));
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.searchingContainer}>
        <ArrowIcon style={{ marginRight: 250, marginTop: 10 }} />
        <GroupIcon style={{ height: 150, width: 300, marginTop: 20 }} />

        <Text style={styles.chooseCityText}>
          Choose your city where you want to ride
        </Text>
        <View style={styles.searchbox}>
          <SearchIcon style={styles.searchIcon} />
          <TextInput
            placeholder="search city"
            style={styles.input}
            onFocus={() => setState(true)}
            value={city}
          />
        </View>
      </View>
      <View style={styles.confirmContainer}>
        <Text style={styles.selectedCityText}>
          You can ride only in your selected city
        </Text>
        <TouchableOpacity style={styles.button} onPress={onNext}>
          <Text>confirm city</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InitialScreen;
