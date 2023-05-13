import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

const BoxMenuIcons: React.FC = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.iconTextBold}>IDPay</Text>

          <ScrollView horizontal={true}>
            <View>
              <Text>Pay</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF1FF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  box: {
    flex: 1,
    backgroundColor: '#FFD6EC',
    padding: 20,
  },
  iconTextBold: {},
});

export default BoxMenuIcons;
