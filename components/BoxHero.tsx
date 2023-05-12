import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Svg, Path} from 'react-native-svg';

const BoxHero: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, {flex: 1, backgroundColor: 'red'}]}>
        <Text style={styles.boxText}>Box 1</Text>
      </View>
      <View style={[styles.box, {flex: 1, backgroundColor: 'green'}]}>
        <Text style={styles.boxText}>
          <Svg width={24} height={24} viewBox="0 0 24 24">
            <Path d="M12 2L3 14h9l-1 8 10-12h-9l1-8z" fill="#fff" />
          </Svg>
          <Svg width={24} height={24} viewBox="0 0 24 24">
            <Path
              d="M12 21.35l-1.74-1.58C5.4 15.36 2 12.11 2 8.5 2 5.42 4.42 3 7.5 3c1.93 0 3.68 1.13 4.5 2.86C12.32 4.13 14.07 3 16 3c3.08 0 5.5 2.42 5.5 5.5 0 3.61-3.4 6.86-8.26 11.27L12 21.35z"
              fill="#fff"
            />
          </Svg>
          <Svg width={24} height={24} viewBox="0 0 24 24">
            <Path
              d="M12 22s-8-4.5-8-10.5 5-7.5 11-7.5S22 5 22 11.5 12 22 12 22zm0-17C7.58 5 4 8.58 4 13s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 13c-2.67 0-5.05-1.11-6.77-2.9l13.87-13.87C18.89 4.95 17.51 4 16 4c-4.41 0-8 3.59-8 8 0 1.51.95 2.89 2.37 3.4L16 19c1.41-.51 2.37-1.89 2.37-3.4 0-1.42-.89-2.63-2.13-3.1l-1.34-.48-1.17 1.17c.58.32 1.03.79 1.27 1.38h-2.59v2h2c0 .55.45 1 1 1s1-.45 1-1v2"
              fill="#fff"
            />
          </Svg>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#D3D3D3',
  },
  box: {
    padding: 0,
  },
  boxText: {
    flex: 1,
    color: 'white',
    padding: 10,
    textAlign: 'center',
  },
});

export default BoxHero;
