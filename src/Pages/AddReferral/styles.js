import metrics from "../../Utility/metrics";
import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    // paddingHorizontal: metrics.scale(20),
    paddingRight: metrics.scale(30),
    paddingLeft: metrics.scale(10),
    paddingTop: metrics.verticalScale(10),
    alignItems: "center",
    flex: 1,
    // justifyContent: "center",
  },
  text: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "700",
    width: "100%",
    // marginBottom: metrics.verticalScale(20),
    // marginTop: metrics.verticalScale(20),
  },
  textP: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "400",
    marginTop: metrics.verticalScale(10),
    marginBottom: metrics.verticalScale(10),
  },
  btn: {
    width: "100%",
    // borderWidth: 1,
    // borderColor: "black",
    borderRadius: 50,
    paddingVertical: 10,
    marginTop: metrics.verticalScale(10),
    marginBottom: metrics.verticalScale(10),
    backgroundColor: "#F5C001",
  },
  centerText: {
    textAlign: "center",
    fontWeight: "500",
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    width: "100%",
    borderRadius: 5,
    alignItems: "center",
    padding: 10,
    marginBottom: metrics.verticalScale(50),
    marginTop: metrics.verticalScale(30),
  },
  input: { width: "80%", fontSize: 16 },
  inputbtn: { fontSize: 16, fontWeight: "500", color: "#347EEA" },
});
