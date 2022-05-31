import metrics from '../../Utility/metrics';

export default styles = {
    container: {
        paddingHorizontal: metrics.scale(20),
        paddingVertical: metrics.verticalScale(20),
        height: "100%",
        flex: 1,
        backgroundColor: "#F9F9F9",
        width: "100%",
    },
    cardText: {
        fontSize: 15,
        fontWeight: "700",
        color: '#828282'
    },
    cardHead: {
        fontSize: 16,
        fontWeight: "400",
        color: "#333",
        marginVertical: metrics.verticalScale(8),
    },
    cardCont: {
        marginBottom: metrics.verticalScale(8),
        paddingBottom: metrics.verticalScale(8),
        borderBottomWidth: 2, 
        borderBottomColor: "#E5E5E5",
    },
    boxCard: {
        marginTop: metrics.verticalScale(20),
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: metrics.verticalScale(20),
        paddingHorizontal: metrics.scale(20),
        borderColor: "#7f7f7f",
    }

}