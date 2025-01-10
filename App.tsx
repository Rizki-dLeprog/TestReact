import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import SimpleStateExample from './src/presentation/components/SimpleStateExample';

const App: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <SimpleStateExample />
    </SafeAreaView>
  );
};

export default App;