import { renderHook, act, RenderHookResult } from '@testing-library/react';
import { useTrueFalseExam } from '../use-true-false-exam';
import { trueFalseExam } from '../../../../../modules/exams/trueFalse/mocks';
import { UserResponse } from '../../../../../modules/exams/trueFalse/domain/models/TrueFalseExam';

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

// const mockedIncorrectUserResponses: UserResponse[] = mockResponses({
//   correctAnswersOnly: false,
// });

describe('useTrueFalseExam hook ', () => {
  test('should execute correctly ', () => {
    const { result } = renderHook(() => useTrueFalseExam());
    const { examIsCompleted } = result.current;
    expect(examIsCompleted).not.toBeUndefined();
  });

  describe('testing hook initial values ', () => {
    const { result } = renderHook(() => useTrueFalseExam());
    test('should initialize examIsCompleted as false', () => {
      const { examIsCompleted } = result.current;
      expect(examIsCompleted).toBe(false);
    });

    test('should initialize examData as undefined', () => {
      const { examData } = result.current;
      expect(examData).toBeUndefined();
    });

    it('should initialize examResults as undefined', () => {
      const { examResults } = result.current;
      expect(examResults).toBeUndefined();
    });
  });

  describe('testing exam logic', () => {
    let renderedHook: RenderHookResult<
      ReturnType<typeof useTrueFalseExam>,
      undefined
    >;

    beforeEach(async () => {
      renderedHook = renderHook(() => useTrueFalseExam());
      const { result } = renderedHook;
      const { getLocalExam } = result.current;
      await act(async () => {
        await getLocalExam();
      });
    });
    test('should execute getLocalExam and set examData', async () => {
      const { result } = renderedHook;
      const { examData } = result.current;
      expect(examData).toBeDefined();
      expect(examData?.topic).toBeDefined();
      expect(examData?.subject).toBeDefined();
      expect(examData?.examStructure).toBeDefined();
      expect(examData?.examStructure.questions.length).toEqual(
        trueFalseExam.examStructure.questions.length
      );
    });

    test('should call the submitExam method when exam is completed', async () => {
      const { result } = renderedHook;
      const { submitExam } = result.current;
      await act(async () => {
        await submitExam(mockedCorrectUserResponses);
      });
      const { examIsCompleted, examResults } = result.current;
      expect(examIsCompleted).toBe(true);
      expect(examResults).toBeDefined();
      expect(examResults?.length).toEqual(
        trueFalseExam.examStructure.questions.length
      );
    });
  });
});
