import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import styles from "../../Pages/SearchCity/style/styleForInitialScreen";
import { SearchIcon } from "../../Utility/iconLibrary";

const InitialScreen = ({ setState }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}></View>
      <View style={styles.searchingContainer}>
        <Text style={styles.chooseCityText}>
          Choose you city where you want to ride ?
        </Text>
        <View style={styles.searchbox}>
          <SearchIcon style={styles.searchIcon} />
          <TextInput
            placeholder="search city"
            style={styles.input}
            onFocus={() => setState(true)}
          />
        </View>
      </View>
      <View style={styles.confirmContainer}>
        <Text style={styles.selectedCityText}>
          You can ride only in your selected city
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text>confirm city</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InitialScreen;
