const path = require('path');

const configPaths = require('./tsconfig.paths.json');

const moduleNameMapper = {};
const rootDir = path.resolve(__dirname);

Object.keys(configPaths.compilerOptions.paths).forEach((itemKey) => {
  const pathKey = itemKey.replace('/*', '/(.*)');
  const pathValue = configPaths.compilerOptions.paths[itemKey][0]
    .replace('/*', '')
    .replace('./', '');
  moduleNameMapper[pathKey] = `<rootDir>/${pathValue}/$1`;
});

module.exports = {
  rootDir,
  displayName: 'root-tests',
  testMatch: ['<rootDir>/src/**/*.test.ts'],
  testEnvironment: 'node',
  clearMocks: true,
  preset: 'ts-jest',
  moduleNameMapper,
};
