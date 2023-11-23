import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import AppNavegacao from './src/AppNavegacao';
import TelaInicial from './src/components/TelaInicial';

export default function App() {
  return (
    <TelaInicial />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
