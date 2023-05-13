import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';

import TopNavigation from './components/TopNavigation';
import BoxHero from './components/BoxHero';
import BoxImageComponent from './components/BoxImageComponent';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TopNavigation />
        <BoxHero />
        <BoxImageComponent />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF1FF',
  },
});

export default App;
