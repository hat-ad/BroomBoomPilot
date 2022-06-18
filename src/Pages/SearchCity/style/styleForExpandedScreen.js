import { StyleSheet } from "react-native";
import metrics from "../../../Utility/metrics";
export default styleForExpandedScreen = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: metrics.scale(20),
  },
  searchbox: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "#F5C00133",
    paddingHorizontal: metrics.scale(30),
    paddingVertical: metrics.verticalScale(10),
    marginHorizontal: metrics.scale(10),
  },

  searchIcon: {
    margin: metrics.verticalScale(10),
  },
  input: {
    width: "100%",
  },

  searchItems: {
    width: "100%",
    height: "80%",
    marginTop: metrics.verticalScale(20),
    margin: metrics.scale(10),
  },
  item: {
    padding: metrics.scale(10),
    borderBottomWidth: metrics.verticalScale(1),
    borderBottomColor: "#ACA5A5",
  },
});
