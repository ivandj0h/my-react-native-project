import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function TitleComponent(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>React Native Project</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 7,
    borderStyle: 'solid',
    borderBottomColor: '#000',
  },
  headingText: {
    fontSize: 24,
    paddingHorizontal: 10,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
