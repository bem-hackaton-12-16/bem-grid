var levels = ['common.blocks'],
    enbBemTechs = require('enb-bem-techs'),
    techs = {
        fileProvider: require('enb/techs/file-provider'),
        postcss : {
            core: require('enb-postcss/techs/enb-postcss'),
            plugins: [
	            require('postcss-import')(),
	            require('postcss-mixins')(),
	            require('postcss-calc')(),
	            require('postcss-at-rules-variables')(),
	            require('postcss-css-variables')(),
	            require('postcss-custom-media')(),
	            require('postcss-nested')(),
	            require('postcss-for')(),
	            require('lost')()
            ]
        }
    };

module.exports = function(config) {

    config.nodes('*.bundles/*', function(nodeConfig) {
        nodeConfig.addTechs([
            [techs.fileProvider, { target: '?.bemdecl.js' }],
            [enbBemTechs.levels, { levels: levels }],
            [enbBemTechs.files],
            [enbBemTechs.deps],
            [techs.postcss.core, {
                target : '?.css',
                plugins: techs.postcss.plugins
            }]
        ]);

        nodeConfig.addTargets(['?.css']);
    });
};
