import React, { useState } from 'react';

type FieldProps = {
  question: string;
  correctAnswer?: boolean;
  userAnswer?: boolean;
};

const Field: React.FC<FieldProps> = ({
  question,
  correctAnswer,
  userAnswer,
}) => {
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
      <label
        htmlFor={`${question}-true`}
        {...(userAnswer && {
          className:
            correctAnswer == userAnswer ? 'correct-answer' : 'wrong-answer',
        })}
      >
        <input
          type='radio'
          required
          name={question}
          id={`${question}-true`}
          value='true'
          onInvalid={onInvalid}
          onChange={onChange}
          defaultChecked={userAnswer !== undefined && userAnswer}
          disabled={userAnswer !== undefined}
        />
        Verdadero
      </label>

      <label
        htmlFor={`${question}-false`}
        {...(userAnswer !== undefined &&
          !userAnswer && {
            className:
              correctAnswer === userAnswer ? 'correct-answer' : 'wrong-answer',
          })}
      >
        <input
          type='radio'
          required
          name={question}
          id={`${question}-false`}
          value='false'
          onInvalid={onInvalid}
          onChange={onChange}
          defaultChecked={userAnswer !== undefined && !userAnswer}
          disabled={userAnswer !== undefined}
        />
        Falso
      </label>
      <br />
    </fieldset>
  );
};

export default Field;
