import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { Dosis_400Regular, Dosis_600SemiBold } from "@expo-google-fonts/dosis";

import Routes from "./src/routes";
import BottomTabNavigator from "./src/components/bottomTab";

export default function App() {
  let [fontsLoaded] = useFonts({
    Dosis_400Regular,
    Dosis_600SemiBold,
    //Adicionem mais fontes aqui sempre que precisar
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <BottomTabNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
