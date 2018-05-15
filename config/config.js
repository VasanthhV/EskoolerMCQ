const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'eskoolermcq'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/eskoolermcq-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'eskoolermcq'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/eskoolermcq-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'eskoolermcq'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/eskoolermcq-production'
  }
};

module.exports = config[env];
