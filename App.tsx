import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import FlatCard from './components/FlatCard';
import ElevatedCard from './components/ElevatedCard';

export default function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard />
        <ElevatedCard />
      </ScrollView>
    </SafeAreaView>
  );
}
