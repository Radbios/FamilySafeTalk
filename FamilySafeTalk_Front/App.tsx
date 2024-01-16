import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import Login from './src/screens/login';
import Cadastro2 from './src/screens/cadastro/cadastro2';
import Cadastro3 from './src/screens/cadastro/cadastro3';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Cadastro3/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
