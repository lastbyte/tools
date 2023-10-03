// jest.config.js
const {pathsToModuleNameMapper} = require('ts-jest');
// In the following statement, replace `./tsconfig` with the path to your `tsconfig` file
// which contains the path mapping (ie the `compilerOptions.paths` option):
const {compilerOptions} = require('./tsconfig');

aliases = pathsToModuleNameMapper(compilerOptions.paths, {prefix: "<rootDir>/"});

module.exports = {
    preset: "ts-jest",
    testEnvironment: 'jsdom',
    transformIgnorePatterns: ['/node_modules\/(.*)'],
    moduleNameMapper: {
        ...aliases,
    },
    transform: {
        "\\.(ts|js)x": "ts-jest",
        ".+\\.(css|styl|less|sass|scss|png|jpg|svg|jpeg|ttf|woff|woff2)$": "jest-transform-stub"
    },
}