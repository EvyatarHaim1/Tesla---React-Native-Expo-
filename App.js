import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import CarItem from './components/CarItem/index';

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem title="Model S" subtitle="Starting at $69,420" imageURL={require("./assets/images/ModelX.jpeg")} />
      {/* <CarItem title="Model 3" subtitle="Starting at $69,420" imageURL={require("./assets/images/Model3.jpeg")} /> */}
      <StatusBar style="auto" />
    </View>
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
