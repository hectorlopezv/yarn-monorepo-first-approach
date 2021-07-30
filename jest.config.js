module.exports = {
  ...require('./testUtils/jest-common'),
  collectCoverageFrom: [
    '<rootDir>/packages/**/*.js',
    '!<rootDir>/packages/builder/**/*.js',
    '!<rootDir>/packages/**/*.stories.js',
    '!<rootDir>/playgroundjs/**/*.js',
    '!<rootDir>/testUtils/**/*.js',
    '!<rootDir>/testUtils/*.js',
    '!<rootDir>/__mocks__/**/*.js',
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
    // './src/shared/utils.js': {
    //     statements: 100,
    //     branches: 80,
    //     functions: 100,
    //     lines: 100,
    //   },
  },
  coverageReporters: ['html', 'text'],
  projects: [
    './testUtils/jest-prettier.js',
     './testUtils/jest-lint.js',
    './testUtils/jest.client.js',
    './testUtils/jest.server.js',
  ],
}
