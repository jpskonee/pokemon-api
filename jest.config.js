module.exports = {
    verbose: true,
    preset: 'ts-jest',
    moduleDirectories: ['node_modules', 'src'],
    rootDir: 'src',
    testEnvironment: 'node',
    testTimeout: 20000,
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
}
