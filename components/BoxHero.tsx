import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCirclePlus,
  faRocket,
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
            borderColor: '#fff',
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
          },
        ]}>
        {/*<Text style={styles.iconTextBold}>IDPay</Text>*/}
        <Image
          source={require('../readme_assets/img/food_1.png')}
          style={{width: 100, height: 100}}
        />
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
          <Text style={styles.iconText}>Pays</Text>
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
  iconTextBold: {
    color: '#FF6D60',
    fontWeight: 'bold',
    fontSize: 30,
  },
});

export default BoxHero;
