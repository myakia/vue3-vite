module.exports = {
    plugins: {
        'postcss-import': {},
        'postcss-url': {},
        // to edit target browsers: use "browserslist" field in package.json
        autoprefixer: {
            overrideBrowserslist: [
                'Android 4.1',
                'iOS 7.1',
                'Chrome > 31',
                'ff > 31',
                'ie >= 8',
            ],
        },
        'postcss-pxtorem': {
            // rootValue: 37.5,
            rootValue({ file }) {
                return file.indexOf('vant') !== -1 ? 37.5 : 75;
            },
            propList: ['*'],
        },
    },
};
