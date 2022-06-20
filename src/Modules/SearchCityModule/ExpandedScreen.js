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
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d50",
      title: "fourth Item",
    },
  ];

  const [list, setList] = useState(DATA);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <Text style={{ fontWeight: "500" }}>{item.title}</Text>
    </TouchableOpacity>
  );

  const onSearch = (val) => {
    if (val === "") {
      setList(DATA);
    } else {
      const filteredList = DATA.filter((item) =>
        item.title.toLowerCase().includes(val.toLowerCase())
      );
      setList(filteredList);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchbox}>
        <SearchIcon style={styles.searchIcon} />
        <TextInput
          placeholder="search city"
          style={styles.input}
          onChangeText={(val) => onSearch(val)}
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
