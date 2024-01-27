import { TrueFalseExam } from '../domain/models/TrueFalseExam';
import { TrueFalseExamRepository } from '../infra/TrueFalseExamRepository';

export const getExamByLocalSource = (
  examRepository: TrueFalseExamRepository
) => {
  return async (): Promise<TrueFalseExam> => {
    return await examRepository.getExamByLocalSource();
  };
};

export const getExamByLocalExternalSource = (
  examRepository: TrueFalseExamRepository
) => {
  return async (): Promise<TrueFalseExam> => {
    return await examRepository.getExamByExternalSource();
  };
};
