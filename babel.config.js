module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./src/'],
        alias: {
          core: './src/core',
          utils: './src/utils',
          common: './src/common',
          screens: './src/screens',
        },
      },
    ],
  ],
};
