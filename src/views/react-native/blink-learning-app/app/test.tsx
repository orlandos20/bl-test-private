import { StyleSheet, Text, View } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { RadioButton } from 'react-native-paper';
import { useForm, Controller, FieldValues } from 'react-hook-form';
import { useRouter } from 'expo-router';
import { trueFalseExam } from '../modules/exams/trueFalse/mocks';
import { TrueFalseExamContext } from './contexts';
import Button from './components/Button';
import { UserResponse } from '../modules/exams/trueFalse/domain/models/TrueFalseExam';

const TestPage = () => {
  const { examData, getLocalExam, submitExam } =
    useContext(TrueFalseExamContext);
  const { navigate } = useRouter();

  const {
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { isValid },
  } = useForm({
    mode: 'all',
    reValidateMode: 'onBlur',
  });

  const onSubmit = (data: FieldValues) => {
    const results: UserResponse[] = [];
    Object.entries(data).map(([key, value]) => {
      const question = trueFalseExam.examStructure.questions.find(
        ({ question }) => question === key
      )?.question;
      if (key === question) {
        results.push({
          question: key,
          userAnswer: value === 'true',
        });
      }
    });

    if (results.length === trueFalseExam.examStructure.questions.length) {
      submitExam(results as UserResponse[]);
    }

    navigate('/');
  };

  useEffect(() => {
    if (!examData) {
      getLocalExam();
    } else {
      let defaultValues = examData?.examStructure?.questions?.map(
        ({ question }) => ({
          [question as string]: undefined,
        })
      );
      reset({ ...defaultValues });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [examData]);

  return (
    <View style={styles.container}>
      {examData &&
        examData?.examStructure?.questions?.length > 0 &&
        examData.examStructure.questions?.map(({ question }) => (
          <Controller
            key={question}
            control={control}
            name={question}
            rules={{ required: 'Este campo es requerido' }}
            render={({ field }) => {
              return (
                <View style={radioStyles.radioGroup}>
                  <View style={radioStyles.radioButton}>
                    <RadioButton.IOS
                      status={field.value === 'true' ? 'checked' : 'unchecked'}
                      onPress={() => setValue(question, 'true')}
                      color='#007BFF'
                      value={field.value}
                    />
                    <Text style={radioStyles.radioLabel}>Verdadero</Text>
                  </View>

                  <View style={radioStyles.radioButton}>
                    <RadioButton.IOS
                      status={field.value === 'false' ? 'checked' : 'unchecked'}
                      onPress={() => setValue(question, 'false')}
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

      <Button
        variant='error'
        disabled={!examData || !isValid}
        onPress={handleSubmit(onSubmit)}
      >
        <Text>Finalizar</Text>
      </Button>
    </View>
  );
};

export default TestPage;

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
