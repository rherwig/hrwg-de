module.exports = {
    rules: {
        'vue/html-indent': ['error', 4],
        'vue/no-useless-template-attributes': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/script-setup-uses-vars': 'off',
        'vue/valid-template-root': 'off',
        'vue/no-reserved-component-names': 'off',
        'vue/html-self-closing': [
            'warn',
            {
                html: {
                    void: 'any',
                    normal: 'any',
                    component: 'always',
                },
            },
        ],
    },
};
