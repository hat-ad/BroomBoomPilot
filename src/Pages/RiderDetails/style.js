import metrics from '../../Utility/metrics';

export default styles = {
    cardText: {
        fontSize: 16,
        fontWeight: "600",
        color: '#828282'
    },
    
    cardHead: {
        fontSize: 22,
        fontWeight: "400",
        color: "#333",
        marginVertical: metrics.verticalScale(8),
    },

    cardCont: {
        marginBottom: metrics.verticalScale(8),
        paddingBottom: metrics.verticalScale(8),
        borderBottomWidth: 2, 
        borderBottomColor: "#E5E5E5",
    }

}