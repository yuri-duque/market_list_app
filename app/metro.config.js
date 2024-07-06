const {getDefaultConfig} = require("@react-native/metro-config");
const {
  getMetroAndroidAssetsResolutionFix,
  getWorkspaces,
} = require("react-native-monorepo-tools");
const {publicPath, applyMiddleware} = getMetroAndroidAssetsResolutionFix();
const path = require("path");

const config = getDefaultConfig(__dirname);
const rootFolder = path.resolve(__dirname, "../");
const nodeModulesPath = path.join(rootFolder, "node_modules");

config.resolver.unstable_enableSymlinks = true;
config.resolver.nodeModulesPaths = [nodeModulesPath];
config.watchFolders = [...getWorkspaces(rootFolder), nodeModulesPath];
config.transformer.publicPath = publicPath;
config.server.enhanceMiddleware = middleware => applyMiddleware(middleware);

module.exports = config;
