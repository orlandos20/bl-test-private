import React, { useState } from 'react';
import { Question } from '../../../../../../modules/exams/trueFalse/domain/models/TrueFalseExam';

const Field: React.FC<Question> = ({ question }) => {
  const [validationMessage, setValidationMessage] = useState<string>();

  const onChange = () => {
    setValidationMessage(undefined);
  };

  const onInvalid = () => {
    setValidationMessage('Este campo es requerido');
  };

  return (
    <fieldset
      key={question}
      className={validationMessage ? 'field-required' : ''}
    >
      <legend>{question}</legend>
      <label htmlFor={`${question}-true`}>
        <input
          type='radio'
          required
          name={question}
          id={`${question}-true`}
          value='true'
          onInvalid={onInvalid}
          onChange={onChange}
        />
        verdadero
      </label>

      <label htmlFor={`${question}-false`}>
        <input
          type='radio'
          required
          name={question}
          id={`${question}-false`}
          value='false'
          onInvalid={onInvalid}
          onChange={onChange}
        />
        falso
      </label>
      <br />
    </fieldset>
  );
};

export default Field;
