import { StyleSheet, Text, View } from 'react-native';

// import { TrueFalseExamContext } from '../../shared/contexts/true-false-exam';
// import { useTrueFalseExam } from '../../shared/hooks/true-false-exam/use-true-false-exam';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Open up App.tsx to start working on your app!
      </Text>
    </View>
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
