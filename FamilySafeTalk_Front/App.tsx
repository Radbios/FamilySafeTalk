import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { useFonts } from "expo-font";
import { Dosis_400Regular, Dosis_600SemiBold } from "@expo-google-fonts/dosis";

import Routes from "./src/routes";
import BottomTabNavigator from "./src/components/bottomTab";
import Conversa from "./src/screens/conversa";

export default function App() {
  let [fontsLoaded] = useFonts({
    Dosis_400Regular,
    Dosis_600SemiBold,
    //Adicionem mais fontes aqui sempre que precisar
  });

  if (!fontsLoaded) {
    return null;
  }

  const statusBarHeight: number = getStatusBarHeight();

  return (
    <SafeAreaView style={[styles.safeArea, { marginTop: statusBarHeight }]}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Routes />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#FFAFCC',
  },
});
