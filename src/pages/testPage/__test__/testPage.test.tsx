import {
  RenderHookResult,
  act,
  fireEvent,
  render,
  renderHook,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TestPage from '../testPage';
import { TrueFalseExamContext } from '../../../contexts/true-false-exam';
import { useTrueFalseExam } from '../../../hooks/true-false-exam/use-true-false-exam';

type RenderHookValue = RenderHookResult<
  ReturnType<typeof useTrueFalseExam>,
  undefined
>;

describe('Exam Page test suite', () => {
  let renderedHook: RenderHookValue;

  const customRender = (value: ReturnType<typeof useTrueFalseExam>) => {
    return act(async () =>
      render(
        <TrueFalseExamContext.Provider value={value}>
          <TestPage />
        </TrueFalseExamContext.Provider>
      )
    );
  };

  beforeEach(async () => {
    renderedHook = renderHook(() => useTrueFalseExam());
  });

  test('should render correctly ', async () => {
    const { getByRole } = await act(async () => {
      return customRender(renderedHook.result.current);
    });

    const LoadingText = getByRole('heading', { level: 1 });

    expect(LoadingText).toBeInTheDocument();
    expect(LoadingText).toHaveTextContent('Loading test...');
  });

  test('button "finalizar" should be disabled if exam is not completed', async () => {
    const { rerender, getByText } = render(
      <TrueFalseExamContext.Provider value={renderedHook.result.current}>
        <TestPage />
      </TrueFalseExamContext.Provider>
    );
    await act(async () => {
      const { result } = renderedHook;
      await result.current.getLocalExam();
    });
    rerender(
      <TrueFalseExamContext.Provider value={renderedHook.result.current}>
        <TestPage />
      </TrueFalseExamContext.Provider>
    );
    const { result } = renderedHook;
    const { examIsCompleted } = result.current;

    expect(examIsCompleted).toBeFalsy();

    const finishButton = getByText('finalizar');
    expect(finishButton).toBeInTheDocument();
    expect(finishButton).toBeDisabled();
  });

  describe('Exam resolution test suite ', () => {
    let allTrueOptions: HTMLElement[];
    let allFalseOptions: HTMLElement[];
    let finishButton: HTMLElement;

    beforeEach(async () => {
      await act(async () => {
        const { result } = renderedHook;
        await result.current.getLocalExam();
      });
      const { getAllByTestId, getByText } = render(
        <TrueFalseExamContext.Provider value={renderedHook.result.current}>
          <TestPage />
        </TrueFalseExamContext.Provider>
      );
      allTrueOptions = getAllByTestId('trueRadio');
      allFalseOptions = getAllByTestId('falseRadio');
      finishButton = getByText('finalizar');
    });

    test("button 'finalizar' shouldn't be enabled if the responses are incomplete", async () => {
      await fireEvent.click(allTrueOptions[0]);
      await fireEvent.click(allFalseOptions[1]);

      expect(finishButton).toBeDisabled();
    });

    test("button 'finalizar' should be enabled if the responses are completed", async () => {
      await act(async () => {
        await userEvent.click(allTrueOptions[0]);
        await userEvent.click(allTrueOptions[1]);
        await userEvent.click(allFalseOptions[2]);
        await userEvent.click(allFalseOptions[3]);
      });

      expect(allTrueOptions[0]).toBeChecked();
      expect(allTrueOptions[1]).toBeChecked();
      expect(allFalseOptions[2]).toBeChecked();
      expect(allFalseOptions[3]).toBeChecked();

      expect(finishButton).toBeEnabled();

      await act(async () => {
        await userEvent.click(finishButton);
      });

      const { result } = renderedHook;

      const { examIsCompleted } = result.current;

      expect(examIsCompleted).toBeTruthy();
    });
  });
});
