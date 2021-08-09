module.exports = {
  ...require('./testUtils/jest-common'),
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/packages/**/lib/*.tsx',
    '<rootDir>/packages/**/lib/*.ts',
    '!<rootDir>/packages/proveedores/**/*.(ts|tsx)',
    '!<rootDir>/packages/proveedores/**/styles.(ts|tsx)',
    '!<rootDir>/stories/**/*.js',
    '!<rootDir>/packages/builder/**/*.js',
    '!<rootDir>/playgroundjs/**/*.js',
    '!<rootDir>/testUtils/**/*.js',
    '!<rootDir>/testUtils/*.js',
    '!<rootDir>/__mocks__/**/*.js',
  ],
  coverageThreshold: {
    global: {
      branches: 5,
      functions: 5,
      lines: 5,
      statements: 5,
    },
  },
  coverageReporters: ['html', 'text'],
  projects: [
    './testUtils/jest-prettier.js',
    './testUtils/jest-lint.js',
    './testUtils/jest.client.js',
    './testUtils/jest.server.js',
  ],
}
