import { TrueFalseExam } from '../domain/models/TrueFalseExam';
import { TrueFalseExamRepository } from './TrueFalseExamRepository';
import { trueFalseExam } from '../mocks';

const getExamByLocalSource = (): TrueFalseExam => {
  return trueFalseExam;
};

const getExamByExternalSource = async (): Promise<TrueFalseExam> => {
  return new Promise<TrueFalseExam>((resolve, reject) => {
    resolve(trueFalseExam as TrueFalseExam);
  });
};

export function CreateTrueFalseExamRepository(): TrueFalseExamRepository {
  return {
    getExamByLocalSource,
    getExamByExternalSource,
  };
}
