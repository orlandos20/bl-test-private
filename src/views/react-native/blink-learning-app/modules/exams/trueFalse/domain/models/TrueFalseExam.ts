export type Question = {
  question: string;
  answer: boolean;
};

export type TrueFalseExam = {
  topic: string;
  subject: string;
  examStructure: {
    examTitle: string;
    questions: Array<Question>;
  };
};

export interface UserResponse {
  question: string;
  userAnswer: boolean;
}

export interface ExamResults {
  question: string;
  correctAnswer: boolean;
  userAnswer: boolean;
}
