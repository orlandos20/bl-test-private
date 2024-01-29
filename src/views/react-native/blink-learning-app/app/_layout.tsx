import { Stack } from 'expo-router';
import Head from 'expo-router/head';

import { TrueFalseExamContext } from './contexts';
import { useTrueFalseExam } from './hooks';

export default function Layout() {
  return (
    <TrueFalseExamContext.Provider value={useTrueFalseExam()}>
      <Head>
        <title>Expo Router Layouts Demo</title>
        <meta name='description' content='Expo Router Layouts Demo' />
      </Head>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: '#f4511e' },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name='index'
          options={{
            headerLargeTitle: true,
            title: 'Blink Learning',
          }}
        />
        <Stack.Screen
          name='test'
          options={{
            headerLargeTitle: true,
            title: 'Assessment',
          }}
        />
        <Stack.Screen
          name='test-results'
          options={{
            headerLargeTitle: true,
            title: 'Test results',
          }}
        />
      </Stack>
    </TrueFalseExamContext.Provider>
  );
}
