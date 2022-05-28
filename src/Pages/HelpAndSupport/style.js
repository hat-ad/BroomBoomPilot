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
        bottom: 40
    },
    anchorTag: {
        fontSize: 14,
        textAlign: "center",
        position: "absolute",
        bottom: 20
    }
});