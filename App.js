import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import Navigation from "./src/Navigation";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "tomato",
    accent: "#F5C001",
  },
};

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </PaperProvider>
  );
}
