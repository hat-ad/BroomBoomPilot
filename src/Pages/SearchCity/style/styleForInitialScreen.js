import { StyleSheet } from "react-native";
import metrics from "../../../Utility/metrics";
export default styleForInitialScreen = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: "100%",
    height: "35%",
    marginBottom: 2,
  },
  searchingContainer: {
    width: "100%",
    height: "35%",
    alignItems: "center",
  },
  confirmContainer: {
    width: "100%",
    height: "30%",
    marginTop: 200,
  },
  chooseCityText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
    marginTop: 20,
    color: "black",
  },
  searchbox: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "#F5C00133",
    paddingHorizontal: metrics.scale(30),
    paddingVertical: metrics.verticalScale(10),
    marginHorizontal: metrics.scale(30),
    marginTop: metrics.verticalScale(20),
  },

  searchIcon: {
    margin: metrics.verticalScale(10),
  },
  input: {
    width: "100%",
  },

  selectedCityText: {
    textAlign: "center",
    fontSize: 17,
    fontWeight: "500",
    marginTop: 45,
  },
  button: {
    paddingVertical: metrics.scale(15),
    marginTop: metrics.verticalScale(25),
    marginHorizontal: metrics.scale(15),
    borderRadius: 22,
    alignItems: "center",
    backgroundColor: "#DDDDDD",
  },
});
