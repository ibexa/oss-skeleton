const path = require('path');
const bundles = require('./var/encore/ez.config.js');
const ConfigManager = require('./ez.webpack.config.manager.js');
const configManagers = require('./var/encore/ez.config.manager.js');

module.exports = (Encore) => {
    Encore.setOutputPath('public/assets/ibexa/build')
        .setPublicPath('/assets/ibexa/build')
        .addExternals({
            react: 'React',
            'react-dom': 'ReactDOM',
            moment: 'moment',
            'popper.js': 'Popper',
            alloyeditor: 'AlloyEditor',
            'prop-types': 'PropTypes',
        })
        .enableSassLoader()
        .enableReactPreset()
        .enableSingleRuntimeChunk();

    bundles.forEach((configPath) => {
        const addEntries = require(configPath);

        addEntries(Encore);
    });

    const Config = Encore.getWebpackConfig();

    Config.name = 'ibexa';

    Config.module.rules[4].oneOf[1].use[1].options.url = false;
    Config.module.rules[1].oneOf[1].use[1].options.url = false;

    configManagers.forEach((configManagerPath) => {
        const configManager = require(configManagerPath);

        configManager(Config, ConfigManager);
    });

    Encore.reset();

    return Config;
};
