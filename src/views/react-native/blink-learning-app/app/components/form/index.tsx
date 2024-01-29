import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { RadioButton } from 'react-native-paper';

type FieldProps = {
  question: string;
  correctAnswer?: boolean;
  userAnswer?: boolean;
};

const index: React.FC<FieldProps> = (
  {
    // question,
    // correctAnswer,
    // userAnswer,
  }
) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>();
  // const [validationMessage, setValidationMessage] = useState<string>();

  const onChange = (value: string) => {
    setSelectedValue(value);
    // setValidationMessage(undefined);
  };

  // useEffect(() => {
  //   if (!selectedValue) {
  //     setValidationMessage('Este campo es requerido');
  //   }
  // }, []);

  return (
    <View style={styles.radioGroup}>
      <View style={styles.radioButton}>
        <RadioButton.IOS
          value='true'
          status={selectedValue === 'true' ? 'checked' : 'unchecked'}
          onPress={() => onChange('true')}
          color='#007BFF'
        />
        <Text style={styles.radioLabel}>Verdadero</Text>
      </View>

      <View style={styles.radioButton}>
        <RadioButton.IOS
          value='false'
          status={selectedValue === 'false' ? 'checked' : 'unchecked'}
          onPress={() => onChange('false')}
          color='#007BFF'
        />
        <Text style={styles.radioLabel}>Falso</Text>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  radioGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 20,
    borderRadius: 8,
    backgroundColor: 'white',
    padding: 16,
    elevation: 4,
    shadowColor: '#000',
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
    color: '#333',
  },
});
