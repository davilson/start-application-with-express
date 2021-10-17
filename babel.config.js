const configPaths = require('./tsconfig.paths.json');

const alias = {};

Object.keys(configPaths.compilerOptions.paths).forEach((itemKey) => {
  const pathKey = itemKey.replace('/*', '');
  const pathValue = configPaths.compilerOptions.paths[itemKey][0].replace(
    '/*',
    '',
  );
  alias[pathKey] = pathValue;
});

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [['module-resolver', { alias }]],
  ignore: ['**/*.test.ts'],
};
