import { useState, useEffect, useContext } from 'react';
import { TrueFalseExamContext } from '../contexts/true-false-exam';
import { TrueFalseExam } from '../../../../../modules/exams/trueFalse/domain/models/TrueFalseExam';
import Button from '../components/Button';
import Field from '../components/form/field';

const TestPage = () => {
  const { getLocalExam } = useContext(TrueFalseExamContext);
  const [examData, setExamData] = useState<TrueFalseExam>();

  const getExam = async () => {
    const exam = await getLocalExam();

    if (exam) {
      setExamData(exam);
    }
  };

  useEffect(() => {
    if (!examData) {
      getExam();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formElement = e.target as HTMLFormElement;
    const formIsValid = formElement.checkValidity();

    if (formIsValid) {
      // const formValues = new FormData(formElement);
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
      <h3>{examData?.examStructure?.examTitle}</h3>
      <br />
      <div>
        <form noValidate onSubmit={handleSubmit}>
          {examData.examStructure?.questions?.length > 0 &&
            examData.examStructure?.questions?.map(({ question, answer }) => (
              <Field question={question} answer={answer} />
            ))}

          <Button variant='error' type='submit'>
            finalizar
          </Button>
        </form>
      </div>
    </section>
  );
};

export default TestPage;
