const path = require('path');

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['../../'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            tests: ['./tests/'],
            '~': './src',
            '@shared': '../../shared',
            '@domain': '../../../modules/exams/trueFalse/domain',
            '@domain': '../../../modules/exams/trueFalse/infra',
            '@domain': '../../../modules/exams/trueFalse/application',
            '@components': './src/components',
          },
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      ],
    ],
  };
};
