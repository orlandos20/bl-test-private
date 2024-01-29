import { createContext, Context } from 'react';
import { useTrueFalseExam } from '../hooks';

type TrueFalseContextType = ReturnType<typeof useTrueFalseExam>;

export const TrueFalseExamContext: Context<TrueFalseContextType> =
  createContext({} as TrueFalseContextType);
