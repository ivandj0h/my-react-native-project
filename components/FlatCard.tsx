import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function FlatCard(): React.JSX.Element {
  return (
    <View>
      <Text style={styles.headingText}>My Native Project</Text>
      <View style={styles.container}>
        <Text style={styles.headingText}>FlatCard</Text>
      </View>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={styles.cardText}>Card One</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text style={styles.cardText}>Card Two</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text style={styles.cardText}>Card Three</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    color: '#0057b7',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 7,
    margin: 8,
  },
  cardOne: {
    backgroundColor: '#000000',
  },
  cardTwo: {
    backgroundColor: '#0057b7',
  },
  cardThree: {
    backgroundColor: '#ffd700',
  },
  cardText: {
    color: '#ffffff',
  },
});
