import React, { useState } from "react";
import {
  FlatList,
  TouchableOpacity,
  Text,
  View,
  TextInput,
} from "react-native";

import { SearchIcon } from "../../Utility/iconLibrary";
import styles from "../../Pages/SearchCity/style/styleForExpandedScreen";

const ExpandedScreen = () => {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
  ];
  const [input, setInput] = useState("");

  const renderItem = ({ item }) => (
    <TouchableOpacity>
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );

  // const filter = array.filter((value) => {
  //   value.title.toLowerCase().includes(input.toLowerCase());
  // });
  // const newData = array.filter((item) => {
  //   return item.title.toLowerCase().includes(input.toLocaleLowerCase);
  // });
  // console.log(newData);

  // const regex = new RegExp("[a-z]+");
  // const val = array.filter((val) => {
  //   .match(regex);
  // });
  // console.log(val);

  return (
    <View style={styles.container}>
      <View style={styles.searchbox}>
        <SearchIcon style={styles.searchIcon} />
        <TextInput
          placeholder="search city"
          style={styles.input}
          onChangeText={(val) => setInput(val)}
        />
      </View>

      <View style={styles.searchItems}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};
export default ExpandedScreen;
