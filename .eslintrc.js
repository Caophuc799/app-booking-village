module.exports = {
  root: true,
  extends: '@react-native',

  plugins: ['react-native', 'prettier'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: { 'react/react-in-jsx-scope': 'off' },
    },
  ],
};
