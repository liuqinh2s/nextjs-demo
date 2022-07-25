const path = require("path");
const packageName = require("./package.json").name;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    // config.resolve.alias["@"] = path.resolve(__dirname);
    // config.output = {
    //   library: `${packageName}-[name]`,
    //   libraryTarget: "umd",
    //   chunkLoadingGlobal: `webpackJsonp_${packageName}`,
    // };
    return config;
  },
  // basePath: "/docs",
  generateBuildId: async () => {
    // You can, for example, get the latest git commit hash here
    return "my-build-id";
  },
};

module.exports = nextConfig;
