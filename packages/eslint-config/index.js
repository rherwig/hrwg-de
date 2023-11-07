const rules = require('./rules');

module.exports = {
    extends: rules.typescript,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', '@nx', 'import'],
    env: {
        'browser': true,
        'node': true,
        'vitest-globals/env': true,
    },
};
