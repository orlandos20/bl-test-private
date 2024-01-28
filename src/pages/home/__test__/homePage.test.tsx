import { render, screen, renderHook, act } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { useTrueFalseExam } from '../../../hooks/true-false-exam/use-true-false-exam';
import HomePage from '../homePage';

import { trueFalseExam } from '../../../mocks';
import { UserResponse } from '../../../types';

import { TrueFalseExamContext } from '../../../contexts/true-false-exam';

const mockResponses = ({
  correctAnswersOnly,
}: {
  correctAnswersOnly: boolean;
}) => {
  return trueFalseExam.examStructure.questions.map(({ question, answer }) => ({
    question,
    userAnswer: correctAnswersOnly ? answer : !answer,
  }));
};

const mockedCorrectUserResponses: UserResponse[] = mockResponses({
  correctAnswersOnly: true,
});

describe('Home  page tests suite', () => {
  test('renders correctly', () => {
    render(<HomePage />);

    const button1 = screen.getByText('Realizar prueba');
    const button2 = screen.getByText('Resultados test');

    expect(button1).toBeInTheDocument();
    expect(button2).toBeInTheDocument();
  });

  test('should button "Realizar examen" to be enabled and button "Resultado test" to be disabled', () => {
    render(<HomePage />);
    const button1 = screen.getByText('Realizar prueba');
    const button2 = screen.getByText('Resultados test');

    expect(button1).toBeEnabled();
    expect(button2).toBeDisabled();
  });

  test('should button "Realizar test" to be disabled when test is completed', async () => {
    const { result } = renderHook(() => useTrueFalseExam());
    const { rerender, getByText } = render(
      <TrueFalseExamContext.Provider value={result.current}>
        <HomePage />
      </TrueFalseExamContext.Provider>
    );

    const button1 = getByText('Realizar prueba');
    const button2 = getByText('Resultados test');

    const { getLocalExam, submitExam } = result.current;

    userEvent.click(button1);

    await act(async () => {
      await getLocalExam();
    });

    await act(async () => {
      await submitExam(mockedCorrectUserResponses);
    });

    rerender(
      <TrueFalseExamContext.Provider value={result.current}>
        <HomePage />
      </TrueFalseExamContext.Provider>
    );
    const { examIsCompleted } = result.current;

    expect(examIsCompleted).toBeTruthy();
    expect(button1).toBeDisabled();
    expect(button2).toBeEnabled();
  });
});
