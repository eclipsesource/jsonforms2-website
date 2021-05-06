module.exports = {
  presets: [require.resolve('@docusaurus/core/lib/babel/preset')],
  plugins: [
    ["@babel/plugin-proposal-private-methods", { "loose": false }],
    "@babel/plugin-proposal-class-properties"
  ]
};
