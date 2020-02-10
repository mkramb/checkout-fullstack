let config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: false,
  testMatch: ['<rootDir>/src/**/*.spec.ts?(x)'],
  transform: { '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest' },
  moduleFileExtensions: ['ts', 'js', 'json'],
  testPathIgnorePatterns: ['/node_modules/'],
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
};

if (process.env.NODE_ENV !== 'ci') {
  config = {
    ...config,
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{ts,tsx}'],
    coverageReporters: ['lcov', 'html'],
  };
}

module.exports = config;
