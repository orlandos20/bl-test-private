export declare type TrueFalseExam = {
  topic: string;
  subject: string;
  examStructure: {
    examTitle: string;
    questions: Array<{
      question: string;
      answer: boolean;
    }>;
  };
};
