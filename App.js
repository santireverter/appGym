import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function AppGym() {
  return (
    <View style={styles.container}>
      <Text>Hola, Coder!</Text>
      <Button
        onPress={apretame = () => {}}
        title='Apretame'
        color={"#000"}
        accessibilityLabel='Que hara este boton?'
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
