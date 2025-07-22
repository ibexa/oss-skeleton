module.exports = {
    config: {
        paths: [
            {
                input: 'src/bundle/Resources/public',
                output: 'src/bundle/Resources/public',
            },
            {
                input: 'src/bundle/ui-dev/src/modules',
                output: 'src/bundle/ui-dev/src/modules',
            },
        ],
        // prettierConfigPath: 'pathToPrettierConfigFile',
    },
    plugins: (plugins) => {
        // modify enabled plugins
        return plugins;
    },
    pluginsConfig: (config) => {
        // modify plugins config
        return config;
    },
};
