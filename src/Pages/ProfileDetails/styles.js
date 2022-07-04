import metrics from "../../Utility/metrics";
import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: metrics.scale(20),
    paddingTop: metrics.verticalScale(20),
    backgroundColor: "#fff",
  },
  text: {
    paddingLeft: 10,
  },
  button: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderRadius: 50,
  },
  submit: {
    width: "100%",
    alignSelf: "center",
    marginTop: metrics.verticalScale(30),
    marginBottom: metrics.verticalScale(30),
  },
  error: {
    color: "red",
    fontSize: 12,
    fontWeight: "400",
  },
  row: {
    paddingBottom: metrics.verticalScale(10),
    backgroundColor: "white",
  },
  title: {
    fontSize: metrics.scale(18),
    fontWeight: "400",
  },
  datePickerContainer: {
    borderColor: "black",
    borderWidth: 0.7,
    paddingHorizontal: metrics.scale(10),
    paddingVertical: metrics.verticalScale(20),
    borderRadius: 5,
    marginTop: metrics.verticalScale(5),
  },
  datePickerText: {
    fontSize: 16,
    color: "grey",
  },
  input: {
    backgroundColor: "#fff",
    borderColor: "black",
  },
});
