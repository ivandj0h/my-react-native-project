import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';

export default function ElevatedCard(): React.JSX.Element {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCard</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.cardOneText}>Card One</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.cardOneText}>Card Two</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.cardOneText}>Card Three</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  headingText: {
    color: '#0C134F',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 5,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 100,
    borderRadius: 5,
    margin: 6,
  },
  cardElevated: {
    backgroundColor: '#FF8400',
  },
  cardOneText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 10,
  },
});
