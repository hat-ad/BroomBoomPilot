import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  stepsCounterContainer: {
    borderRadius: 50,
    width: 30,
    height: 30,
    backgroundColor: "#000",
    justifyContent: "center",
    marginRight: 20,
  },
  stepsCounterText: {
    color: "#fff",
    textAlign: "center",
  },
  chipText: {
    backgroundColor: "#01C301",
    paddingHorizontal: 10,
    padding: 2,
    borderRadius: 50,
    fontSize: 12,
    fontWeight: "500",
  },
  mutedText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#828282",
  },
  chipTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  chipTextMuted: {
    fontSize: 12,
    fontWeight: "500",
    marginRight: 10,
  },
  stepsCounterTitle: { fontSize: 14, fontWeight: "600" },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  stepsBorder1: {
    borderStyle: "dashed",
    borderLeftWidth: 1,
    height: 20,
    left: 14,
    marginTop: 5,
    marginBottom: 5,
  },
  stepsBorder2: {
    borderStyle: "dashed",
    borderLeftWidth: 1,
    height: 20,
    left: 14,
    marginTop: 7,
  },
  stepsTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
  },
  link: {
    fontWeight: "600",
    color: "#347EEA",
  },
  inviteText: { fontSize: 13, fontWeight: "500", marginLeft: 10 },
  inviteTextContainer: {
    flexDirection: "row",
    backgroundColor: "#F2F2F2",
    borderWidth: 1,
    justifyContent: "space-around",
    paddingHorizontal: 5,
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  copyCodeContainer: {
    justifySelf: "center",
    alignSelf: "center",
    backgroundColor: "#F5C00133",
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    alignItems: "center",
  },
  copyCodeText: { marginRight: 15, fontWeight: "600", fontSize: 14 },
  title: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 10,
  },
  img: {
    alignSelf: "center",
    height: 200,
    width: 200,
  },
  subTitle: {
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 20,
  },
  container: { paddingHorizontal: 20, flex: 1, backgroundColor: "white" },
});
