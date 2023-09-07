module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    '@babel/preset-typescript',
  ],
  plugins: [
    ['nativewind/babel'],
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.js', '.ts', '.tsx'],
      },
    ],
  ],
};
