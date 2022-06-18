import { StyleSheet } from "react-native";
export default styleForExpandedScreen = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  searchbox: {
    width: "85%",
    height: 45,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 22,
    backgroundColor: "#DDDDDD",
    marginTop: 35,
  },

  searchIcon: {
    margin: 10,
  },
  input: {
    width: "82%",
    height: 35,
    backgroundColor: "#DDDDDD",
  },

  searchItems: {
    width: "85%",
    height: "80%",
    backgroundColor: "#DDDDDD",
    marginTop: 20,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#696969",
    backgroundColor: "#C0C0C0",
  },
});
