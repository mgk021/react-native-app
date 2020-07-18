import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import AppScreen from './app/screen/AppScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AppScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
}); 
