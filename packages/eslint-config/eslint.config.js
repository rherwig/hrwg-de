const nxPlugin = require('@nx/eslint-plugin');
const js = require('@eslint/js');
const globals = require('globals');
const jsoncParser = require('jsonc-eslint-parser');
const tsParser = require('@typescript-eslint/parser');
const ts = require('@typescript-eslint/eslint-plugin');
const prettier = require('eslint-config-prettier');

module.exports = [
    js.configs.recommended,
    {
        plugins: {
            '@nx': nxPlugin,
            '@typescript-eslint': ts,
        },
    },
    {
        files: ['*.ts', '*.tsx'],
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
        files: ['*.ts', '*.tsx', '*.js'],
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
