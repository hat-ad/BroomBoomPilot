import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import Navigation from "./src/Navigation";
import "./src/Utility/iconConfig";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "././src/Redux/store";
import { SnackBar } from "./src/Components";
import "./src/Utility/logger";
import { useEffect } from "react";
import * as Contacts from "expo-contacts";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "black",
    accent: "#F5C001",
  },
};

export default function App() {
  // useEffect(() => {
  //   (async () => {
  //     const { status } = await Contacts.requestPermissionsAsync();
  //     if (status === "granted") {
  //       const { data } = await Contacts.getContactsAsync({
  //         fields: [Contacts.Fields.Emails],
  //       });

  //       if (data.length > 0) {
  //         const contact = data[0];
  //         console.log(contact);
  //       }
  //     }
  //   })();
  // }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={theme}>
          <NavigationContainer>
            <Navigation />
            <SnackBar />
          </NavigationContainer>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}
