import React from 'react';

import {View, Text, useColorScheme, StyleSheet} from 'react-native';

export default function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.darkText : styles.whiteText}>
        Welcome to React Native!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', // left to right
    justifyContent: 'center', // top to bottom
    backgroundColor: '#000',
  },
  whiteText: {
    fontFamily: 'Roboto, sans-serif',
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  darkText: {
    fontFamily: 'Roboto, sans-serif',
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
