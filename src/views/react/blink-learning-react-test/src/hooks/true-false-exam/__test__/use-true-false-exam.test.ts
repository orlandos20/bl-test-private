import { renderHook } from '@testing-library/react';
import { useTrueFalseExam } from '../use-true-false-exam';

export const multiplyNumbers = (
  a: number,
  b: number,
  comparisionNumber: number
) => {
  const result = a * b;

  if (result < 0) {
    return 'Should be only positive values';
  }

  if (result === comparisionNumber) {
    return 'isEqual';
  }

  if (result > comparisionNumber) {
    return 'isGreater';
  }

  return 'isLower';
};

describe('should works --> ', () => {
  it('should be Lower', async () => {
    const result = multiplyNumbers(2, 2, 5);

    await expect(result).toEqual('isLower');
  });

  it('should be Greater', async () => {
    const result = multiplyNumbers(2, 2, 3);

    await expect(result).toEqual('isGreater');
  });

  it('should be Equal', async () => {
    const result = multiplyNumbers(2, 2, 4);

    await expect(result).toEqual('isEqual');
  });

  //   'Should be only positive values'

  it('should be only positives', async () => {
    const result = multiplyNumbers(-2, 2, 4);

    await expect(result).toEqual('Should be only positive values');
  });
});

describe('testing useTrueFalseExam hook --> ', () => {
  it('should execute correctly --> ', () => {
    expect(renderHook(() => useTrueFalseExam())).not.toThrow();
  });
});
