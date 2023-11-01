import nxPlugin from '@nx/eslint-plugin';
import js from '@eslint/js';
import globals from 'globals';
import jsoncParser from 'jsonc-eslint-parser';
import tsParser from '@typescript-eslint/parser';
import ts from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-config-prettier';

export default [
    js.configs.recommended,
    {
        plugins: {
            '@nx': nxPlugin,
            '@typescript-eslint': ts,
        },
    },
    {
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                jsx: true,
            },
            globals: {
                ...globals.node,
            },
            sourceType: 'module',
        },
        rules: {},
    },
    {
        files: ['*.json'],
        languageOptions: {
            parser: jsoncParser,
        },
        rules: {},
    },
    {
        files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
        rules: {
            '@nx/enforce-module-boundaries': [
                'error',
                {
                    enforceBuildableLibDependency: true,
                    allow: [],
                    depConstraints: [
                        {
                            sourceTag: '*',
                            onlyDependOnLibsWithTags: ['*'],
                        },
                    ],
                },
            ],
        },
    },
    prettier,
];
