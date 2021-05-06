module.exports = function (context, options) {
  return {
    name: 'custom-webpack',
    configureWebpack(config, isServer, utils) {
      return {
        optimization: {
          splitChunks: {
            cacheGroups: {
              common: {
                minChunks: 1
              },
            },
          }
        },
        resolve: {
          fallback: {
            buffer: require.resolve("buffer/"),
            http: require.resolve("stream-http"),
            https: require.resolve("https-browserify"),
            sass: require.resolve("sass")
          }
        }
      };
    },
  };
};
