import { StyleSheet } from "react-native";
export default styleForInitialScreen = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  imageContainer: {
    width: "100%",
    height: "35%",
  },
  searchingContainer: {
    width: "100%",
    height: "35%",
    alignItems: "center",
  },
  confirmContainer: {
    width: "100%",
    height: "30%",
  },
  chooseCityText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
  },
  searchbox: {
    width: "83%",
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
    width: "80%",
    height: 35,
    backgroundColor: "#DDDDDD",
    outlineWidth: 1,
  },
  selectedCityText: {
    textAlign: "center",
    fontSize: 17,
    fontWeight: "500",
    marginTop: 45,
  },
  button: {
    width: "83%",
    padding: 12,
    borderRadius: 22,
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    marginLeft: 25,
    marginTop: 35,
  },
});
