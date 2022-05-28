import metrics from "../../Utility/metrics";
import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: metrics.verticalScale(10),
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
  },
  loader: {
    position: "absolute",
    bottom: 40,
  },
  text: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "700",
    width: "100%",
    marginBottom: 50,
    marginTop: 60,
  },
  textP: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "400",
    width: "80%",
    marginTop: 25,
    marginBottom: metrics.verticalScale(50),
  },
  approveText: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "700",
    width: "100%",
    marginTop: 25,
  },
  approveP: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "400",
    width: "80%",
    marginTop: 25,
    marginBottom: metrics.verticalScale(50),
  },
  img: {
    width: "100%",
    resizeMode: "contain",
  },
  GreenImg: {
    width: 120,
    marginTop: metrics.verticalScale(40),
  },
  ApprovedImg: {
    width: metrics.scale(230),
    resizeMode: "contain",
    marginTop: metrics.verticalScale(40),
  },
  NotApprovedImg: {
    width: "100%",
    resizeMode: "contain",
    marginTop: metrics.verticalScale(40),
  },
  btn: {
    width: "100%",
    position: "absolute",
    bottom: 20,
    borderWidth: 2,
    borderColor: "#49C00F",
    textAlign: "center",
    borderRadius: 50,
    paddingVertical: 8,
    backgroundColor: "#49C00F",
  },
  Errorbtn: {
    width: "100%",
    position: "absolute",
    bottom: 20,
    borderWidth: 1,
    borderColor: "#B1000E",
    textAlign: "center",
    borderRadius: 50,
    paddingVertical: 8,
    backgroundColor: "#B1000E",
  },
  errorIcon: {
    height: "100%",
    width: "auto",
    resizeMode: "contain",
    marginRight: metrics.scale(16),
  },
  errowText: {
    fontSize: 14,
    fontWeight: "500",
    alignSelf: "center",
  },
});
