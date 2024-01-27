import { useState } from 'react';

import {
  getExamByLocalSource,
  getExamByLocalExternalSource,
} from '../../../../../modules/exams/trueFalse/application/getExam';
import { CreateTrueFalseExamRepository } from '../../../../../modules/exams/trueFalse/infra/ApiTrueFalseExamRepository';
import { UserResponse } from '../../../../../modules/exams/trueFalse/domain/models/TrueFalseExam';

export const useTrueFalseExam = () => {
  const [examIsCompleted, setExamIsCompleted] = useState<boolean>(false);
  const [examResponse, setExamResponse] = useState<UserResponse[]>();

  const getLocalExam = () => {
    return getExamByLocalSource(CreateTrueFalseExamRepository())();
  };

  const getRemoteExam = () => {
    return getExamByLocalExternalSource(CreateTrueFalseExamRepository());
  };

  const completeExam = () => {
    setExamIsCompleted(true);
  };

  const submitExam = (results: UserResponse[]) => {
    setExamResponse(results);
    completeExam();
  };

  return {
    examIsCompleted,
    getLocalExam,
    getRemoteExam,
    submitExam,
    examResponse,
  };
};
