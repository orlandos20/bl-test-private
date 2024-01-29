import { StyleSheet, Text, View } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { TrueFalseExamContext } from './contexts';
import { useRouter } from 'expo-router';
import { Controller, useForm } from 'react-hook-form';
import Button from './components/Button';
import { RadioButton } from 'react-native-paper';

const testResults = () => {
  const { examResults } = useContext(TrueFalseExamContext);
  const { navigate } = useRouter();

  const { control, reset } = useForm({
    mode: 'all',
    reValidateMode: 'onBlur',
  });

  useEffect(() => {
    if (examResults) {
      let defaultValues = examResults?.map(({ question, userAnswer }) => ({
        [question as string]: userAnswer.toString(),
      }));
      reset({ ...defaultValues });
    }
  }, []);

  return (
    <View style={styles.container}>
      {examResults &&
        examResults?.length > 0 &&
        examResults?.map(({ question, userAnswer }) => (
          <Controller
            key={question}
            control={control}
            name={question}
            defaultValue={userAnswer.toString()}
            rules={{ required: 'Este campo es requerido' }}
            render={({ field }) => {
              return (
                <View style={radioStyles.radioGroup}>
                  <View style={radioStyles.radioButton}>
                    <RadioButton.IOS
                      disabled
                      status={field.value === 'true' ? 'checked' : 'unchecked'}
                      color='#007BFF'
                      value={field.value}
                    />
                    <Text style={radioStyles.radioLabel}>Verdadero</Text>
                  </View>

                  <View style={radioStyles.radioButton}>
                    <RadioButton.IOS
                      status={field.value === 'false' ? 'checked' : 'unchecked'}
                      disabled
                      color='#007BFF'
                      value={field.value}
                    />
                    <Text style={radioStyles.radioLabel}>Falso</Text>
                  </View>
                </View>
              );
            }}
          />
        ))}

      <Button variant='error' onPress={() => navigate('/')}>
        <Text>volver</Text>
      </Button>
    </View>
  );
};

export default testResults;
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

const radioStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 20,
    borderRadius: 8,
    backgroundColor: '#3d3d3d',
    padding: 16,
    elevation: 4,
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioLabel: {
    marginLeft: 8,
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});
