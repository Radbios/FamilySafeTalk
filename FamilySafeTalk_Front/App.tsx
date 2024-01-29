import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { Dosis_400Regular, Dosis_600SemiBold } from "@expo-google-fonts/dosis";

import { AuthProvider } from './src/contexts/auth';
import Routes from "./src/routes";

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
    <SafeAreaView style={{ flex : 1, paddingTop: 35, marginTop: 2, backgroundColor: '#FFAFCC'}}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
