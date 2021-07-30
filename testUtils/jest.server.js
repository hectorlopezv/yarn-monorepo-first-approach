// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
  ...require('./jest-common'),
  rootDir: path.join(__dirname, '..'),
  testEnvironment: 'jest-environment-node',
  displayName: 'server',
  testMatch: ['__server_tests__/**/*.js'],
}
