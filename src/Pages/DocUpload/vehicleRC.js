// import React from 'react';
// import { Image, View, Text, TouchableOpacity } from "react-native";
// import { AppDocumentPicker } from "../../Components";
// import styles from "../DocUpload/styles";

// const Welcome = ({ navigation }) => {
//     return (
//         <View style={{ padding: 10 }}>
//             <View style={{ alignItems: "center" }}>
//                 <View style={{ width: "90%", paddingVertical: 20, borderBottomWidth: 2, borderBottomColor: "#828282", flexDirection: "row" }}>
//                     <Image style={{ height: 28, width: 28 }} source={require("../../../assets/Icon/steeringWheel.png")} />
//                     <View style={{ flexDirection: 'row', paddingLeft: 10 }}>
//                         <Text style={{ fontSize: 16, fontWeight: "700" }}>Vechile type : </Text>
//                         <Text style={{ fontSize: 16, color: "#828282", fontWeight: "700" }}>Car/Four Wheeler</Text>
//                     </View>
//                     <View style={{ justifyContent: 'center', marginLeft: "auto" }}>
//                         <TouchableOpacity style={{ marginLeft: "auto" }}><Text style={{ color: "#347EEA", fontWeight: "800" }}>Change?</Text></TouchableOpacity>
//                     </View>
//                 </View>
//             </View>

//             <View style={{ paddingTop: 48, paddingLeft: 20, alignItems: "flex-start" }}>
//                 <Text style={{ fontWeight: "800", fontSize: 22 }}>Upload Vechile RC Image</Text>
//                 <View style={{ marginTop: 20 }}>
//                     <Text style={{ fontWeight: "400", fontSize: 22, paddingBottom: 10 }}>Front</Text>
//                     <Text style={{ fontWeight: "500", fontSize: 14, color: "#828282" }}>Supported files PDF, JPG, PNG</Text>
//                     <View style={{ height: 80, width: '100%', backgroundColor: "#f2f2f2" }}>

//                     </View>
//                 </View>
//             </View>

//         </View>

//     );
// };



import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";
import { AppDocumentPicker } from "../../Components";
import styles from "./styles";
import { DeleteIcon } from "../../Utility/iconLibrary";

const VehicleRC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Upload Vehicle RC Image</Text>
            <View style={{ marginTop: 20 }}>
                <Text style={styles.title}>Front</Text>
                <Text style={styles.muted}>Supported files PDF, JPG, PNG</Text>
                <View style={styles.uploadContainer}>
                    <AppDocumentPicker
                        title={"upload"}
                        onDocumentPicked={(e) => console.log(e)}
                        buttonStyle={styles.pickerButton}
                        containerStyle={styles.pickerContainer}
                    />
                    <Text style={{ fontSize: 16, marginRight: 5, fontWeight: "600" }}>
                        image1.jpg
                    </Text>
                    <TouchableOpacity style={{ marginLeft: 20 }}>
                        <DeleteIcon />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ marginTop: 20 }}>
                <Text style={styles.title}>Back</Text>
                <Text style={styles.muted}>Supported files PDF, JPG, PNG</Text>
                <View style={styles.uploadContainer}>
                    <AppDocumentPicker
                        title={"upload"}
                        onDocumentPicked={(e) => console.log(e)}
                        buttonStyle={styles.pickerButton}
                        containerStyle={styles.pickerContainer}
                    />
                    <Text style={{ fontSize: 16, marginRight: 5, fontWeight: "600" }}>
                        image1.jpg
                    </Text>
                    <TouchableOpacity style={{ marginLeft: 20 }}>
                        <DeleteIcon />
                    </TouchableOpacity>
                </View>
            </View>

            <View
                style={{
                    marginTop: 30,
                }}
            >
                <Text style={styles.heading}>Enter Vehicle RC number</Text>
                <TextInput placeholder="Enter DL number" mode="outlined" />
            </View>
            <TouchableOpacity style={styles.submit}>
                <Text style={styles.centerText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
};




export default VehicleRC;