import { StyleSheet } from "react-native";
import metrics from "../../../Utility/metrics";
export default styleForExpandedScreen = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  searchbox: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "#F5C00133",
    paddingHorizontal: metrics.scale(30),
    paddingVertical: metrics.verticalScale(10),
  },

  searchIcon: {
    margin: metrics.verticalScale(10),
  },
  input: {
    width: "100%",
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
