import { useState, useEffect, useContext } from 'react';
import { TrueFalseExamContext } from '../contexts/true-false-exam';
import { TrueFalseExam } from '../../../../../modules/exams/trueFalse/domain/models/TrueFalseExam';

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

  return <div>TestPage</div>;
};

export default TestPage;
