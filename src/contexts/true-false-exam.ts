import { createContext, Context } from 'react';
import { useTrueFalseExam } from '../hooks/true-false-exam/use-true-false-exam';

type TrueFalseContextType = ReturnType<typeof useTrueFalseExam>;

export const TrueFalseExamContext: Context<TrueFalseContextType> =
  createContext({} as TrueFalseContextType);
