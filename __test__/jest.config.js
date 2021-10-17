const path = require('path');

const rootConfig = require('../jest.config');

const rootDir = path.resolve(__dirname, '..');

const e2eConfig = {
  rootDir,
  displayName: 'e2e-tests',
  setupFilesAfterEnv: ['<rootDir>/__test__/jest-setup.ts'],
  testMatch: ['<rootDir>/__test__/**/*.test.ts'],
};

module.exports = {
  ...rootConfig,
  ...e2eConfig,
};
