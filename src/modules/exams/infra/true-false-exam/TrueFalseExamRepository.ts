import { TrueFalseExam } from '../../domain/models/true-false-exam/TrueFalseExam';

export interface TrueFalseExamRepository {
  getExamByLocalSource: () => TrueFalseExam;
  getExamByExternalSource: () => Promise<TrueFalseExam>;
}
