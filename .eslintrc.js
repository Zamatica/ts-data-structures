module.exports = {
    root: true,
    overrides: [
        {
            files: ['*.ts', '*.tsx'], // Your TypeScript files extension
            parserOptions: {
                project: ['./tsconfig.json'], // Specify it only for TypeScript files
            },
        }
    ],
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
    extends: [
        'plugin:@typescript-eslint/recommended'
    ],
    rules: {
        indent: ['error', 4],
        '@typescript-eslint/no-inferrable-types': 'off',
        eqeqeq: ["error", "always"],
    },
    parserOptions: {
        sourceType: 'module',
        project: './tsconfig.json',
        "ecmaVersion": 10
    }
}