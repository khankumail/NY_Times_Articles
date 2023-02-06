module.exports = {
    preset: "react-native",
        transform: {
    //   '^.+\\.(ts|tsx)?$': 'ts-jest',
      "^.+\\.(js|jsx)$": "babel-jest",
    },transformIgnorePatterns: [
        'node_modules/(?!(jest-)?react-native' +
          '|@react-navigation' +
          '|native-base' +
          '|react-native-vector-icons'+
          '|@react-native',
          '/)'
      ]
  };