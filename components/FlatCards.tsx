import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function FlatCards(): JSX.Element {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={[styles.cardTextWhite]}>Card 1</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text style={[styles.cardTextBlue]}>Card 2</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // row, column, row-reverse, column-reverse (default: column) (left to right)
    padding: 8,
  },
  headingText: {
    fontSize: 24,
    paddingHorizontal: 10,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    borderRadius: 2,
    margin: 4,
  },
  cardOne: {
    backgroundColor: '#005bbb',
  },
  cardTwo: {
    backgroundColor: '#ffd500',
  },
  cardTextWhite: {
    color: '#fff',
  },
  cardTextBlue: {
    color: '#001891',
  },
});
