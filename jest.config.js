export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [ '<rootDir>/src/testing/setup.ts' ],
  moduleNameMapper: {
    '^.+\\.css$': '<rootDir>/src/testing/css-stub.ts',
  }
}
