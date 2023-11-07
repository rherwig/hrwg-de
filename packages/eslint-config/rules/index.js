const rules = [
    './best-practices',
    './debug',
    './declarations',
    './es6',
    './imports',
    './node',
    './nx',
    './typescript',
    './variables',
].map((file) => require.resolve(file));

const baseRules = [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:vitest-globals/recommended',
    ...rules,
];

const formattingRules = ['prettier'];

module.exports = {
    typescript: [...baseRules, ...formattingRules],
};
