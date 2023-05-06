import React from 'react';

import {SafeAreaView, ScrollView} from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatedCard from './components/ElevatedCard';
import TitleComponent from './components/TitleComponent';
import FancyCard from './components/FancyCard';

export default function App(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        <TitleComponent />
        <FlatCards />
        <ElevatedCard />
        <FancyCard />
        <FancyCard />
      </ScrollView>
    </SafeAreaView>
  );
}
