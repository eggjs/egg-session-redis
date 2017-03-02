'use strict';

exports.keys = 'keys';

exports.redis = {
  clients: {
    session: {
      host: '127.0.0.1',
      port: 6379,
      db: 0,
      password: '',
    },
    cache: {
      host: '127.0.0.1',
      port: 6379,
      db: 1,
      password: '',
    },
  },
};

exports.sessionRedis = {
  name: 'session',
};
