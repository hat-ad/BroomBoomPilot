import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import Navigation from "./src/Navigation";
import "react-native-gesture-handler";
import "./src/Utility/iconConfig";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "././src/Redux/store";
import { SnackBar } from "./src/Components";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "black",
    accent: "#F5C001",
  },
};

export default function App() {
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
