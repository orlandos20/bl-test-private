import { TrueFalseExam } from '../domain/models/TrueFalseExam';

export interface TrueFalseExamRepository {
  getExamByLocalSource: () => TrueFalseExam;
  getExamByExternalSource: () => Promise<TrueFalseExam>;
}
