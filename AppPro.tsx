import React, {JSX} from 'react';
import {View, Text, StyleSheet, useColorScheme} from 'react-native';

export default function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const userName = 'Ivan Djoh';
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: isDarkMode ? styles.whiteText : styles.blackText,
        }}>
        Hello, {userName}!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteText: {
    color: '#fff',
  },
  blackText: {
    color: '#000',
  },
});
