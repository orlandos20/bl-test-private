import { TrueFalseExam } from '../types/index';

export const trueFalseExam: TrueFalseExam = {
  topic: 'Estructuras III',
  subject: 'Tecnología',
  examStructure: {
    examTitle: 'Señala si son verdaderas o falsas las siguientes frases',
    questions: [
      {
        question: 'El esfuerzo cortante solo aparece cuando cortamos algo.',
        answer: true,
      },
      {
        question: 'La tracción es un esfuerzo que tiende a estirar un objeto.',
        answer: false,
      },
      {
        question:
          'El esqueleto humano está sometido básicamente al esfuerzo de compresión.',
        answer: true,
      },
      {
        question: 'Un vaso de plástico no tiene ningún tipo de estructura.',
        answer: false,
      },
    ],
  },
};
