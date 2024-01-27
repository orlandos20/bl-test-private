import { useContext } from 'react';
import { TrueFalseExamContext } from '../contexts/true-false-exam';
import Field from '../components/form/field';
import Button from '../components/Button';
import { useLocation } from 'wouter';

const TestResultsPage = () => {
  const { examResults } = useContext(TrueFalseExamContext);
  const [, navigate] = useLocation();

  return (
    <form noValidate>
      {examResults &&
        examResults?.length > 0 &&
        examResults?.map(({ question, userAnswer, correctAnswer }) => (
          <Field
            key={question}
            question={question}
            userAnswer={userAnswer}
            correctAnswer={correctAnswer}
          />
        ))}

      <Button variant='error' onClick={() => navigate('/')}>
        volver
      </Button>
    </form>
  );
};

export default TestResultsPage;
