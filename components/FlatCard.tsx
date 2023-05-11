import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function FlatCard(): React.JSX.Element {
  return (
    <View>
      <Text style={styles.headingText}>FlatComponent</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={styles.headingText}>Card One</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text style={styles.headingText}>Card Two</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text style={styles.headingText}>Card Two</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
      padding: 10,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 3,
    margin: 10,
  },
  cardOne: {
    backgroundColor: '#000',
  },
  cardTwo: {
    backgroundColor: 'blue',
  },
  cardThree: {
    backgroundColor: 'orange',
  },
});
