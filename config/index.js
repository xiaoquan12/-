//根据运行环境加载配置文件，例如npm run dev 则加载开发环境配置文件_development.js
module.exports = require('./_' + process.env.NODE_ENV).default
