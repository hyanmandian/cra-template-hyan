module.exports = {
  verbose: true,
  testURL: 'http://localhost',
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/index.js',
    '!src/**/styles.js',
    '!src/**/*.stories.js',
  ],
  coverageDirectory: '<rootDir>/test/coverage',
  coverageReporters: ['json', 'lcov', 'text-summary'],
  setupTestFrameworkScriptFile: '<rootDir>/test/jest.setup.js',
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  coverageThreshold: {
    global: {
      statements: 70,
      branches: 70,
      functions: 70,
      lines: 70,
    },
  },
  moduleNameMapper: {
    '.*\\.(css|less|styl|scss|sass)$': '<rootDir>/test/mocks/cssModule.js',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test/mocks/image.js',
  },
};
