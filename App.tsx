import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

import TopNavigation from './components/TopNavigation';

export default function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        <TopNavigation />
      </ScrollView>
    </SafeAreaView>
  );
}
