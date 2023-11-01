import baseConfig from '../../eslint.config.js';
import tsParser from '@typescript-eslint/parser';
import { FlatCompat } from '@eslint/eslintrc';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

export default [
    ...baseConfig,
    ...compat.plugins('qwik'),
    ...compat.extends('plugin:qwik/recommended'),
    {
        files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                project: [
                    './tsconfig.*?.json',
                ],
                ecmaVersion: 2020,
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
    },
];
