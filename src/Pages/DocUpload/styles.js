import metrics from "../../Utility/metrics";
import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    paddingLeft: metrics.scale(30),
    paddingTop: metrics.verticalScale(10),
    flex: 1,
  },
  heading: {
    fontWeight: "700",
    fontSize: 22,
  },
  title: {
    fontWeight: "400",
    fontSize: 22,
    marginBottom: metrics.verticalScale(10),
  },
  muted: {
    fontWeight: "500",
    fontSize: 14,
    color: "#828282",
  },
  pickerButton: {
    borderRadius: 50,
    backgroundColor: "#347EEA",
    paddingVertical: metrics.verticalScale(10),
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  pickerContainer: {
    width: "40%",
    marginRight: 10,
    marginVertical: 6,
  },
  uploadContainer: {
    width: "100%",
    backgroundColor: "#F2F2F2",
    borderWidth: 1,
    borderStyle: "solid",
    flexDirection: "row",
    paddingVertical: 6,
    paddingHorizontal: 10,
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 10,
  },
  submit: {
    backgroundColor: "#F5C001",
    // borderWidth: 2,
    borderRadius: 50,
    padding: 10,
    alignSelf: "center",
    // bottom: 0,
    width: "100%",
    marginTop: metrics.verticalScale(40),
    marginBottom: metrics.verticalScale(30),
  },

  centerText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
    color: "#000",
  },
  image: {
    width: 80,
    height: 80,
  },
  selected: {
    backgroundColor: "#F5C00133",
  },
  modalImageContainer: {
    margin: metrics.moderateScale(10),
    paddingBottom: metrics.verticalScale(10),
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    height: metrics.verticalScale(120),
    width: metrics.scale(120),
  },
  row: { flexDirection: "row", justifyContent: "space-between" },
  iconText: { textAlign: "center", fontSize: 14, fontWeight: "600" },
  box: {
    alignSelf: "center",
    marginLeft: metrics.scale(20),
    marginRight: "auto",
    fontSize: 18,
    fontWeight: "700",
  },
  boxBtn: {
    flexDirection: "row",
    width: "100%",
    borderWidth: 1,
    padding: 20,
    borderRadius: 10,
    marginBottom: metrics.scale(20),
    alignItems: "center",
  },
});
