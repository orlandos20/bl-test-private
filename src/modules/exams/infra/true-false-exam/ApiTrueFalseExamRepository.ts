import { TrueFalseExam } from '../../domain/models/true-false-exam/TrueFalseExam';
import { TrueFalseExamRepository } from './TrueFalseExamRepository';

const getExamByLocalSource = (): TrueFalseExam => {
  return {} as TrueFalseExam;
};

const getExamByExternalSource = (): Promise<TrueFalseExam> => {
  return new Promise<TrueFalseExam>((resolve, reject) => {
    resolve({} as TrueFalseExam);
  });
};

export function TrueFalseExamRepository(): TrueFalseExamRepository {
  return {
    getExamByLocalSource,
    getExamByExternalSource,
  };
}
