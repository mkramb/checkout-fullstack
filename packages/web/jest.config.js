let config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  collectCoverage: false,
  setupFiles: ['<rootDir>/tests/setup.js'],
  testMatch: ['<rootDir>/src/**/*.spec.ts?(x)'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
  },
  testPathIgnorePatterns: ['/node_modules/'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'identity-obj-proxy',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
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
