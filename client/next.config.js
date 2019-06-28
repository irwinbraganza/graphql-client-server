const withPlugins = require('next-compose-plugins');
const typescript = require('@zeit/next-typescript');
const css = require('@zeit/next-css');

const nextConfig = {
    distDir: 'build',
    webpack: function (config) {
        config.module.rules.push({
          test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 100000,
              name: '[name].[ext]'
            }
          }
        })
        return config
    }
};

const cssConfig = {
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: '[local]'
    }
};

module.exports = withPlugins([
    [typescript],
    [css, cssConfig]
], nextConfig);