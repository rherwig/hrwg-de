const baseConfig = require('../../eslint.config.js');
const tsParser = require('@typescript-eslint/parser');
const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

module.exports = [
    ...baseConfig,
    ...compat.plugins('qwik'),
    ...compat.extends('plugin:qwik/recommended'),
    {
        files: ['*.ts', '*.tsx'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                project: ['apps/website/tsconfig.*?.json'],
                ecmaVersion: 2020,
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
    },
];
