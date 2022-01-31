module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [ '<rootDir>/src/testing/setup.js' ],
  moduleNameMapper: {
    '^.+\\.css$': '<rootDir>/src/testing/css-stub.js',
  }
}
