import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCirclePlus, faHome,
  faRocket,
  faRupiahSign,
  faWallet,
} from '@fortawesome/free-solid-svg-icons';

const BoxHero: React.FC = () => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.box,
          {
            flex: 1,
            backgroundColor: '#FFD6EC',
            borderRightWidth: 1,
            borderColor: '#FF6D60',
          },
        ]}>
        <FontAwesomeIcon icon={faRupiahSign} size={32} color="#FF6D60" />
      </View>
      <View
        style={[
          styles.box,
          {
            flex: 2,
            backgroundColor: '#FFD6EC',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
          },
        ]}>
        <View style={styles.iconContainer}>
          <FontAwesomeIcon
            icon={faWallet}
            size={32}
            color="#FF6D60"
            style={styles.icon}
          />
          <Text style={styles.iconText}>Pay</Text>
        </View>
        <View style={styles.iconContainer}>
          <FontAwesomeIcon
            icon={faCirclePlus}
            size={32}
            color="#FF6D60"
            style={styles.icon}
          />
          <Text style={styles.iconText}>Top Up</Text>
        </View>
        <View style={styles.iconContainer}>
          <FontAwesomeIcon
            icon={faRocket}
            size={32}
            color="#FF6D60"
            style={styles.icon}
          />
          <Text style={styles.iconText}>Explore</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 15,
    backgroundColor: 'transparent',
  },
  box: {
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    color: '#FF6D60',
    padding: 10,
    textAlign: 'center',
  },
  iconContainer: {
    marginRight: 10,
  },
  icon: {
    alignSelf: 'center',
  },
  iconText: {
    color: '#FF6D60',
    marginTop: 5,
    textAlign: 'center',
  },
});

export default BoxHero;
