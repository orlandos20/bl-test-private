import { useState } from 'react';

import {
  getExamByLocalSource,
  getExamByLocalExternalSource,
} from '../../../../../../modules/exams/trueFalse/application/getExam';
import { CreateTrueFalseExamRepository } from '../../../../../../modules/exams/trueFalse/infra/ApiTrueFalseExamRepository';
import {
  TrueFalseExam,
  UserResponse,
  ExamResults,
} from '../../../../../../modules/exams/trueFalse/domain/models/TrueFalseExam';

export const useTrueFalseExam = () => {
  const [examIsCompleted, setExamIsCompleted] = useState<boolean>(false);
  const [examData, setExamData] = useState<TrueFalseExam>();
  const [examResults, setExamResults] = useState<ExamResults[]>();

  const getLocalExam = async () => {
    const exam = await getExamByLocalSource(CreateTrueFalseExamRepository())();
    if (exam) {
      setExamData(exam);
    }
  };

  const getRemoteExam = () => {
    return getExamByLocalExternalSource(CreateTrueFalseExamRepository());
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
    getRemoteExam,
    submitExam,
    examData,
    examResults,
  };
};
