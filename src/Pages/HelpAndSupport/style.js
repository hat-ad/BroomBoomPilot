import metrics from "../../Utility/metrics";
import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: metrics.verticalScale(10),
        alignItems: "center",
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "#F9F9F9"
    },
    anchorTag: {
        fontSize: 14,
        textAlign: "center",
        position: "absolute",
        bottom: 20
    },
    search: {
        flexDirection: "row",
        width: "100%",
        padding: metrics.verticalScale(16),
        borderColor: "#000",
        borderRadius: 50,
        borderWidth: 1,
        backgroundColor: "#F8EEC7",
        alignItems: "center"
    },
    cards: {
        height: 100,
        width: "100%",
        flexDirection: "row",
        backgroundColor: "#fff",
        paddingVertical: metrics.verticalScale(12),
        paddingHorizontal: metrics.scale(20),
        borderRadius: 10,
        borderColor: "#E6E6E6",
        borderWidth: 1,
        marginBottom: metrics.verticalScale(10),
    },
    cardCont: {
        height: "50%",
        position: "absolute",
        top: "15%"
    }
});