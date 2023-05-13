import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const BoxImageComponent: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <View style={styles.imageIndividual}>
          <Image
            source={require('../readme_assets/img/food_1.png')}
            style={{width: 100, height: 100}}
          />
        </View>
        <View style={styles.imageIndividual}>
          <Image
            source={require('../readme_assets/img/food_1.png')}
            style={{width: 100, height: 100}}
          />
        </View>
        <View style={styles.imageIndividual}>
          <Image
            source={require('../readme_assets/img/food_1.png')}
            style={{width: 100, height: 100}}
          />
        </View>
      </View>
      <Text>Food 1</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 400,
  },
  imageWrapper: {
    padding: 10,
    margin: 10,
    flexDirection: 'row',
  },
  imageIndividual: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    margin: 10,
  },
});

export default BoxImageComponent;
