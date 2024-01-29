import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { TrueFalseExamContext } from './src/contexts';
import { useTrueFalseExam } from './src/hooks';

export default function App() {
  return (
    <TrueFalseExamContext.Provider value={useTrueFalseExam()}>
      <View style={styles.container}>
        <Text style={styles.text}>
          Open up App.tsx to start working on your app!
        </Text>
      </View>
    </TrueFalseExamContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
});
