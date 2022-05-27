import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
// import { SteeringIcon } from "../../Utility/iconLibrary";
import metrics from "../../Utility/metrics";
import { MapMarkerIcon, ArrowRight } from "../../Utility/iconLibrary";


const DocUpload = () => {
    return (
        <View style={styles.container}>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginBottom: metrics.verticalScale(20),
                    paddingBottom: 8,
                    borderBottomWidth: 1,
                    borderBottomColor: '#828282'
                }}
            >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <MapMarkerIcon style={{ marginRight: 10 }} size={24} color={"#828282"} />
                    <Text>Kolkata</Text>
                </View>
                <TouchableOpacity onPress={() => setVisible(true)}>
                    <Text style={{ color: "#347EEA" }}>Change</Text>
                </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 24, fontWeight: "700", textAlign: "center", width: "100%", marginBottom: metrics.scale(50) }}>Let's upload the following documents
                to activate your account</Text>
            <View>
                <TouchableOpacity style={styles.boxBtn}>
                    <Image style={{ width: 50, height: 32 }} source={require("../../../assets/Icon/DriveLic.png")} />
                    <Text style={styles.box}>Driving License</Text>
                    <ArrowRight style={{ alignSelf: "center" }} size={20} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.boxBtn}>
                    <Image source={require("../../../assets/Icon/VehicleRC.png")} />
                    <Text style={styles.box}>Vehicle RC</Text>
                    <ArrowRight style={{ alignSelf: "center" }} size={20} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.boxBtn}>
                    <Image source={require("../../../assets/Icon/Aadhar.png")} />
                    <Text style={styles.box}>Aadhaar/PAN Card</Text>
                    <ArrowRight style={{ alignSelf: "center" }} size={20} />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.submit}>
                <Text style={styles.centerText}>Proceed</Text>
            </TouchableOpacity>
        </View>
    )
}

export default DocUpload;