import { useState } from 'react';
import { trueFalseExam } from '../../mocks';
import { TrueFalseExam, UserResponse, ExamResults } from '../../types';

export const useTrueFalseExam = () => {
  const [examIsCompleted, setExamIsCompleted] = useState<boolean>(false);
  const [examData, setExamData] = useState<TrueFalseExam>();
  const [examResults, setExamResults] = useState<ExamResults[]>();

  const getLocalExam = async () => {
    setExamData(trueFalseExam);
  };

  const completeExam = () => {
    setExamIsCompleted(true);
  };

  const mapQuestionResponses = (results: UserResponse[]) => {
    return examData?.examStructure?.questions?.map(({ question, answer }) => ({
      question,
      correctAnswer: answer,
      userAnswer: results?.find(
        ({ question: questionAnswered }) => question === questionAnswered
      )?.userAnswer as ExamResults['userAnswer'],
    }));
  };

  const submitExam = (results: UserResponse[]) => {
    const resultsMapped = mapQuestionResponses(results);
    setExamResults(resultsMapped);
    completeExam();
  };

  return {
    examIsCompleted,
    getLocalExam,
    submitExam,
    examData,
    examResults,
  };
};
