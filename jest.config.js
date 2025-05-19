export default {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy"
  },
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest"
  }
}
