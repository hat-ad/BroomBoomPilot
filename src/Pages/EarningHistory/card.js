import { View, Text, TouchableOpacity } from "react-native";
import { Divider } from "react-native-paper";
import { LocationIcon } from "../../Utility/iconLibrary";
import styles from "./styles";
import { ArrowRight } from "../../Utility/iconLibrary";

const Card = () => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View>
          <Text style={{ fontWeight: "500" }}>#RD123456789</Text>
          <Text style={{ fontWeight: "300" }}>9:00</Text>
        </View>

        <View>
          <Text
            style={{
              color: "#00AD00",
              fontWeight: "700",
              fontSize: 13,
              textTransform: "uppercase",
              paddingTop: 10,
            }}
          >
            completed
          </Text>
        </View>
      </View>

      <View style={styles.separator} />

      <View style={{ display: "flex", flexDirection: "row" }}>
        <View style={styles.locationContainer}>
          <View style={styles.location}>
            <Text style={styles.locationText}>13:00</Text>
            <LocationIcon style={{ color: "green", marginHorizontal: 2 }} />
            <Text style={styles.locationText}>
              6/1 Dum Dum Rd,Satpukur,Kolkata,WB
            </Text>
          </View>

          <View
            style={{
              height: 54,
              width: 1,
              backgroundColor: "#909090",
              marginRight: "56%",
              marginBottom: 3,
            }}
          />

          <View style={styles.location}>
            <Text style={styles.locationText}>13:00</Text>
            <LocationIcon style={{ color: "#EB5757", marginHorizontal: 2 }} />
            <Text style={styles.locationText}>
              6/1 Dum Dum Rd,Satpukur,Kolkata,WB
            </Text>
          </View>
        </View>
        <View
          style={{
            width: "10%",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              console.log("arrow clicked");
            }}
          >
            <ArrowRight />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Card;
