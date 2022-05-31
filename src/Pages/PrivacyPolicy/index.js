import React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "./styles";
const PrivacyPolicy = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text style={styles.header}>CUSTOMER PRIVACY POLICY</Text>
        </View>
        <View>
          <Text style={styles.paragraph}>
            quis tempor malesuada facilisis Nunc Nunc nisi sodales. tortor.
            vehicula, ipsum convallis. eget Lorem in faucibus luctus Cras
            gravida Vestibulum vitae quis at Lorem vitae eget nibh elementum
            quis elementum eget est. Donec malesuada sed tempor vitae est.
          </Text>
          <Text style={styles.paragraph}>
            elit nec massa elementum tincidunt convallis. Donec tortor. non
            adipiscing tempor fringilla eget efficitur. dui porta laoreet sit
            sit ex felis, urna. sapien scelerisque elit id tincidunt Nunc
            viverra hendrerit viverra dui. Ut ex In quis Sed massa non. orci
            lobortis, Nunc tempor ex ipsum non, Donec Ut quis lobortis, non,
            vitae porta Nam nisl.
          </Text>
          <Text style={styles.paragraph}>
            viverra ullamcorper laoreet ipsum nec Sed Nunc sed Morbi cursus
            tempor dui commodo lorem. Donec Praesent cursus sit Praesent
            adipiscing non lacus, In non, elit. quam efficitur. faucibus
            placerat id viverra enim. porta Nam Sed risus ex Ut lacus varius
            Nullam non ex Lorem hendrerit Donec vel at Donec ex amet, elementum
            dui hendrerit libero, elit. amet,
          </Text>
          <Text style={styles.paragraph}>
            elit nec massa elementum tincidunt convallis. Donec tortor. non
            adipiscing tempor fringilla eget efficitur. dui porta laoreet sit
            sit ex felis, urna. sapien scelerisque elit id tincidunt Nunc
            viverra hendrerit viverra dui. Ut ex In quis Sed massa non. orci
            lobortis, Nunc tempor ex ipsum non, Donec Ut quis lobortis, non,
            vitae porta Nam nisl.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default PrivacyPolicy;
