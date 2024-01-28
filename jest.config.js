/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/__test__/**/*.(spect|test).ts?(x)', '**/?(*.)+(test).ts?(x)'],
  transform: {
    '^.+\\.[tj]sx?$': [
      'ts-jest',
      {
        tsConfig: './tsconfig.json',
        useESM: true,
      },
    ],
  },
};
