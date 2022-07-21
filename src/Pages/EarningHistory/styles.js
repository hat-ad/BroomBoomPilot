const styles = {
  container: {
    paddingHorizontal: 5,
  },
  card: {
    width: "90%",
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginTop: 5,
    borderRadius: 15,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  locationContainer: {
    width: "90%",
    display: "flex",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 25,
  },
  location: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    overflow: "hidden",
  },
  locationText: {
    fontWeight: "300",
    fontSize: 14,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#D5DDE0",
    borderBottomWidth: 1,
  },
  textSeparator: {
    backgroundColor: "#828282",
    height: 2,
    flex: 1,
    alignSelf: "center",
  },
};
export default styles;
