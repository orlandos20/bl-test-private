import { TrueFalseExam } from '../../domain/models/true-false-exam/TrueFalseExam';
import { TrueFalseExamRepository } from './TrueFalseExamRepository';
import { trueFalseExam } from '../../mocks/true-false-exam';

const getExamByLocalSource = (): TrueFalseExam => {
  return trueFalseExam;
};

const getExamByExternalSource = async (): Promise<TrueFalseExam> => {
  return new Promise<TrueFalseExam>((resolve, reject) => {
    resolve(trueFalseExam as TrueFalseExam);
  });
};

export function TrueFalseExamRepository(): TrueFalseExamRepository {
  return {
    getExamByLocalSource,
    getExamByExternalSource,
  };
}
