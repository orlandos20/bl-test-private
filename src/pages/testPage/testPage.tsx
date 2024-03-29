import { useState, useEffect, useContext, useRef } from 'react';
import { TrueFalseExamContext } from '../../contexts/true-false-exam';
import Button from '../../components/Button';
import Field from '../../components/form/field';
import { useLocation } from 'wouter';

const TestPage = () => {
  const { examData, getLocalExam, submitExam } =
    useContext(TrueFalseExamContext);
  const [readyForSubmit, setReadyForSubmit] = useState<boolean>(false);
  const [, navigate] = useLocation();

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!examData) {
      getLocalExam();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formOnChange = () => {
    if (formRef?.current?.checkValidity()) {
      setReadyForSubmit(true);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.target as HTMLFormElement;
    const formIsValid = formElement.checkValidity();

    if (formIsValid) {
      const formValues = new FormData(formElement);
      const parsedResponses = Object.fromEntries(formValues);
      const responsesToSubmit = Object.entries(parsedResponses).map(
        ([key, value]) => {
          return {
            question: key,
            userAnswer: value === 'true',
          };
        }
      );

      setReadyForSubmit(true);
      submitExam(responsesToSubmit);
      navigate('/');
    }
  };

  if (!examData) {
    return <h1>Loading test...</h1>;
  }

  return (
    <section>
      <h2>
        {examData?.topic} | {examData.subject}
      </h2>
      <br />
      <h3>{examData?.examStructure?.examTitle}:</h3>
      <br />
      <div>
        <form
          noValidate
          onSubmit={handleSubmit}
          ref={formRef}
          onChange={formOnChange}
        >
          {examData.examStructure?.questions?.length > 0 &&
            examData.examStructure?.questions?.map(({ question }) => (
              <Field key={question} question={question} />
            ))}

          <Button variant='error' type='submit' disabled={!readyForSubmit}>
            finalizar
          </Button>
        </form>
      </div>
    </section>
  );
};

export default TestPage;
