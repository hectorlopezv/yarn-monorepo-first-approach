// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
module.exports = {
    ...require('./jest-common'),
    rootDir: path.join(__dirname, '..'),
    displayName: "client",
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  //snapshotSerializers: ['jest-emotion'],
  testMatch: ['<rootDir>/__tests__/**/*.js'],
}