import metrics from "../../Utility/metrics";
import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: metrics.verticalScale(10),
        alignItems: "center",
        height: "100%",
        flex: 1,
        // justifyContent: "space-between",
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
        padding: metrics.verticalScale(12),
        borderColor: "#000",
        borderRadius: 50,
        borderWidth: 1,
        backgroundColor: "#F8EEC7",
        alignItems: "center",
        marginVertical: metrics.verticalScale(20),
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
    },
    viewAll: {
        marginLeft: "auto",
    },
    recentTickets: {
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: 6,
        padding: metrics.verticalScale(20),

    },
    selectIssue: {
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: 6,
        padding: metrics.verticalScale(20),
        marginTop: metrics.verticalScale(20),
        marginBottom: metrics.verticalScale(0),
    },
    ticketDetails: {
        paddingHorizontal: metrics.scale(20),
        marginVertical: metrics.verticalScale(20),
        paddingVertical: metrics.verticalScale(10),
        flexDirection: "row",
        width: '100%',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: "#CCCCCC"
    },
    issueSelect: {
        paddingHorizontal: metrics.scale(20),
        paddingVertical: metrics.verticalScale(10),
        marginVertical: metrics.verticalScale(10),
        flexDirection: "row",
        width: '100%',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: "#CCCCCC"
    },
    issueDetails: {
        paddingHorizontal: metrics.scale(20),
        paddingVertical: metrics.verticalScale(10),
        marginVertical: metrics.verticalScale(20),
        flexDirection: "row",
        borderRadius: 6,
        borderWidth: 1,
        borderColor: "#CCCCCC"
    },
    detailIssue: {
        paddingHorizontal: metrics.scale(20),
        paddingVertical: metrics.verticalScale(10),
        marginVertical: metrics.verticalScale(20),
        width: '100%',
        borderRadius: 6,
        backgroundColor: "#fff",
        alignSelf: "flex-start"
    },
    Btn: {
        height: 50,
        backgroundColor: "#347EEA",
        width: "100%",
        justifyContent: "center",
        borderRadius: 50,
        marginTop: metrics.verticalScale(10),
        position: "absolute",
        bottom: 20
    },
    BtnText: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "700",
        alignSelf: "center"
    },
});