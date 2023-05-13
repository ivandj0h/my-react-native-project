import React, {useState} from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
// @ts-ignore
import Icon from 'react-native-vector-icons/FontAwesome';

const TopNavigation: React.FC = (): React.ReactElement => {
  const [text, setText] = useState<string>('');

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Text style={{padding: 10}}>
            <Icon name="search" size={30} color="#FF6D60" />
          </Text>
          <TextInput
            style={styles.input}
            value={text}
            onChangeText={setText}
            placeholder="Find services, food, or places"
          />
        </View>
        <Image
          source={require('../readme_assets/nancy.jpeg')}
          style={styles.profileImage}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    height: 100,
    backgroundColor: '#FF6D60',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF6D60',
    borderRadius: 10,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 100,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 0,
    paddingLeft: 10,
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 100,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
});

export default TopNavigation;
