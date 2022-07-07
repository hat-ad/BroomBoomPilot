import React, { useEffect, useState } from "react";
import {
  FlatList,
  TouchableOpacity,
  Text,
  View,
  TextInput,
} from "react-native";

import { ArrowLeft } from "../../Utility/iconLibrary";
import styles from "../../Pages/SearchCity/style/styleForExpandedScreen";
import Api from "../../Services";
import { useDispatch } from "react-redux";
import { notify, updateUser } from "../../Redux/Actions";

const ExpandedScreen = ({ setState, setCity }) => {
  const dispatch = useDispatch();
  const [list, setList] = useState({});
  const [search, setSearch] = useState("");
  useEffect(() => {
    getCity("");
  }, []);

  //api request
  const updateCity = async (city) => {
    try {
      const response = await Api.update("/pilot/update-pilot-details", {
        city: city,
      });
      if (response.status === 1) {
        setCity(city);
        // dispatch(notify({ type: "success", message: response.message }));
        dispatch(updateUser(response.data));
        setState(false);
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      dispatch(notify({ type: "error", message: error.message }));
    }
  };

  const getCity = async (val) => {
    try {
      const response = await Api.get(`/pilot/get-cities?query=${val}`);
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
      onPress={
        () => updateCity(item.name)
        // navigation.navigate("docUpload", { city: item.name })
      }
    >
      <Text style={{ fontWeight: "500" }}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchbox}>
        <TouchableOpacity onPress={() => setState(false)}>
          <ArrowLeft style={styles.searchIcon} />
        </TouchableOpacity>
        <TextInput
          placeholder="search city"
          style={styles.input}
          onChangeText={(val) => {
            getCity(val);
            setSearch(val);
          }}
        />
      </View>

      <View style={styles.searchItems}>
        {list.length > 0 ? (
          <FlatList
            data={list}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        ) : (
          renderItem({ item: { name: search } })
        )}
      </View>
    </View>
  );
};
export default ExpandedScreen;
