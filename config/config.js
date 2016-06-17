var path = require('path'),
  rootPath = path.normalize(__dirname + '/..'),
  env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'AuthNodeJS'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://admin:supersecret@ds037145.mlab.com:37145/restfulapp'
  },

  test: {
    root: rootPath,
    app: {
      name: 'AuthNodeJS'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://admin:supersecret@ds037145.mlab.com:37145/restfulapp'
  },

  production: {
    root: rootPath,
    app: {
      name: 'AuthNodeJS'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://admin:supersecret@ds037145.mlab.com:37145/restfulapp'
  }
};

module.exports = config[env];
