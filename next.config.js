// next.config.js
module.exports = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // GitHub Pages用に最適化を無効にする
  },
  basePath: '/blueberry-chat',  // GitHub Pagesのリポジトリ名を指定
  assetPrefix: '/blueberry-chat', // GitHub Pagesのリポジトリ名を指定
}

