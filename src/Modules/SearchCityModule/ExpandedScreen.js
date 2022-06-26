import React, { useEffect, useState } from "react";
import {
  FlatList,
  TouchableOpacity,
  Text,
  View,
  TextInput,
} from "react-native";

import { SearchIcon } from "../../Utility/iconLibrary";
import styles from "../../Pages/SearchCity/style/styleForExpandedScreen";
import Api from "../../Services";
import { useDispatch } from "react-redux";
import { notify } from "../../Redux/Actions";

const ExpandedScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [list, setList] = useState({});
  useEffect(() => {
    getCity("");
  }, []);

  //api request

  const getCity = async (val) => {
    try {
      const response = await Api.get(`/pilot/get-cities?query=${val}`);
      console.log(response);
      if (response.status === 1) {
        setList(response.data);
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      dispatch(notify({ type: "error", message: error.message }));
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate("docUpload", { city: item.name })}
    >
      <Text style={{ fontWeight: "500" }}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchbox}>
        <SearchIcon style={styles.searchIcon} />
        <TextInput
          placeholder="search city"
          style={styles.input}
          onChangeText={(val) => getCity(val)}
        />
      </View>

      <View style={styles.searchItems}>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};
export default ExpandedScreen;
