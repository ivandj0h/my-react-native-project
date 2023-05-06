import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';

export default function ElevatedCard(): JSX.Element {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.cardTextWhite}>Tap here</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.cardTextWhite}>Tap here</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.cardTextWhite}>Tap here</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 7,
  },
  headingText: {
    fontSize: 24,
    paddingHorizontal: 10,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 100,
    borderRadius: 7,
    margin: 4,
  },
  cardElevated: {
    backgroundColor: '#001891',
    elevation: 10,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#ef5354',
  },
  cardTextWhite: {
    color: '#fff',
  },
  cardTextBlue: {
    color: '#001891',
  },
});
