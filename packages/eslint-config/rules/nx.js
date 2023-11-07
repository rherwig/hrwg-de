module.exports = {
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
};
