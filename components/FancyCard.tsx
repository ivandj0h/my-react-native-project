import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export default function FancyCard(): JSX.Element {
  return (
    <View>
      <Text style={styles.headingText}>Fancy Card</Text>
      <View style={[styles.card, styles.cardFancy]}>
        <Image
          source={{
            uri: 'https://correcto.id/content/images/th1_2021011109542996423.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={[styles.cardTitle]}>Nancy Momoland</Text>
          <Text style={[styles.cardDescription]}>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo, pariatur?"
          </Text>
          <Text style={[styles.cardBody, styles.cardFooter]}>
            By Nancy Momoland
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  headingText: {
    fontSize: 24,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  card: {
    width: 360,
    height: 400,
    borderRadius: 7,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardFancy: {
    backgroundColor: '#fff',
    elevation: 10,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 10,
    color: '#fff',
  },
  cardTitle: {
    fontSize: 20,
    color: '#000',
  },
  cardDescription: {
    fontSize: 14,
    color: '#000',
    textAlign: 'justify',
  },
  cardFooter: {
    fontSize: 12,
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  },
});
