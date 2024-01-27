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
