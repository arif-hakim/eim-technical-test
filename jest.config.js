const path = require("path");

module.exports = {
  preset: "ts-jest",
  testEnvironment: "./src/testing/test-environment.ts",
  globalSetup: path.resolve(__dirname, "./src/testing/setup.ts"),
  globalTeardown: path.resolve(__dirname, "./src/testing/teardown.ts"),
  testPathIgnorePatterns: ["./node_modules/"],
  coverageReporters: ["lcov", "html"],
  transform: {
    "node_modules/variables/.+\\.(j|t)sx?$": "ts-jest",
  },
  transformIgnorePatterns: ["node_modules/(?!variables/.*)"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
