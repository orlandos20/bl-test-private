import { StyleSheet, Text, View } from 'react-native';
import { Link, Stack } from 'expo-router';
import React, { useContext } from 'react';
import Button from './components/Button';
import { TrueFalseExamContext } from './contexts';

const index = () => {
  const { examIsCompleted } = useContext(TrueFalseExamContext);

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: 'Blink Learning',
          headerStyle: { backgroundColor: '#f4511e' },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <View style={styles.container}>
        {!examIsCompleted ? (
          <Link href='/test' asChild>
            <Button variant='success'>
              <Text style={styles.text}>Realizar prueba</Text>
            </Button>
          </Link>
        ) : (
          <Button variant='success' disabled>
            <Text style={styles.text}>Realizar prueba</Text>
          </Button>
        )}

        {examIsCompleted ? (
          <Link href='/test-results' asChild>
            <Button variant='success'>
              <Text style={styles.text}>Resultados test</Text>
            </Button>
          </Link>
        ) : (
          <Button variant='success' disabled>
            <Text style={styles.text}>Resultados test</Text>
          </Button>
        )}
      </View>
    </View>
  );
};

export default index;

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
