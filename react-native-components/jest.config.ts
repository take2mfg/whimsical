
// jest.config.js
// Sync object
export default {
  testEnvironment: "node",
  preset: "jest-expo",
  globals: {
    "ts-jest": {
      tsconfig: {
        jsx: "react-native"
      }
    }
  },
  // transform: {
  //   "^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js",
  //   "^.+\\.tsx?$": "ts-jest"
  // },
  testMatch: [
    "**/?(*.)+(spec|test).ts?(x)"
  ],
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/coverage/**",
    "!**/node_modules/**",
    "!**/babel.config.js",
    "!**/jest.setup.js"
  ],
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
  ],
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|@react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|sentry-expo|native-base)"
  ],
  coverageReporters: [
    "json-summary", 
    "text",
    "lcov"
  ]
};