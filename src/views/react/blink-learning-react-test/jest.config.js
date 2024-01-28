/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
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
  moduleNameMapper: {
    '\\.(css|sass)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['./setupTests.ts'],
};
