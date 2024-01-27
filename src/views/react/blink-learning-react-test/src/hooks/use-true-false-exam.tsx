import { useState } from 'react';

import {
  getExamByLocalSource,
  getExamByLocalExternalSource,
} from '../../../../../modules/exams/trueFalse/application/getExam';
import { CreateTrueFalseExamRepository } from '../../../../../modules/exams/trueFalse/infra/ApiTrueFalseExamRepository';

export const useTrueFalseExam = () => {
  const [examIsCompleted, setExamIsCompleted] = useState<boolean>(false);

  const getLocalExam = () => {
    return getExamByLocalSource(CreateTrueFalseExamRepository())();
  };

  const getRemoteExam = () => {
    return getExamByLocalExternalSource(CreateTrueFalseExamRepository());
  };

  const completeExam = () => {
    setExamIsCompleted(true);
  };

  return {
    examIsCompleted,
    getLocalExam,
    getRemoteExam,
    completeExam,
  };
};
