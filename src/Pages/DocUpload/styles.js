import metrics from "../../Utility/metrics";

export default styles = {
  container: {
    paddingHorizontal: 20,
    paddingTop: metrics.verticalScale(10),
  },
  heading: {
    fontWeight: "700",
    fontSize: 22,
  },
  title: {
    fontWeight: "400",
    fontSize: 22,
    marginBottom: 20
  },
  muted: {
    fontWeight: "500",
    fontSize: 14,
    color: "#828282",
  },
  pickerButton: {
    borderRadius: 50,
    backgroundColor: "#347EEA",
    paddingVertical: 14,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  pickerContainer: {
    width: "50%",
    marginRight: 10,
  },
  uploadContainer: {
    width: "100%",
    backgroundColor: "#F2F2F2",
    borderWidth: 1,
    borderStyle: "solid",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 5,
    alignItems: "center",
    borderRadius: 10,
  },
  submit: {
    borderWidth: 2,
    borderRadius: 50,
    padding: 10,
    justifyContent: "flex-end"
  },
  centerText: { textAlign: "center", fontSize: 16, fontWeight: "600" },
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
    alignSelf: "center", marginLeft: 30, marginRight: "auto", fontSize: 22, fontWeight: '700'
  },
  boxBtn: { flexDirection: "row", width: "100%", borderWidth: 1, padding: 20, borderRadius: 10, marginBottom:metrics.scale(20) }
};
