import React, {JSX} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function AppPro(): JSX.Element {
  const userName = 'Ivan Djoh';
  const bgColor = '#000';
  return (
    <View style={styles.container}>
      {bgColor === '#000' ? (
        <Text style={styles.whiteText}>Hello, {userName}!</Text>
      ) : (
        <Text style={styles.blackText}>Hello, {userName}!</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  whiteText: {
    color: '#fff',
  },
  blackText: {
    color: '#000',
  },
});
