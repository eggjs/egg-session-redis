'use strict';

const assert = require('assert');

const ONE_DAY = 1000 * 60 * 60 * 24;

module.exports = app => {
  const name = app.config.sessionRedis.name;
  const redis = name ? app.redis.get(name) : app.redis;
  assert(redis, `redis instance ${name} not exists`);

  app.sessionStore = {
    * get(key) {
      const res = yield redis.get(key);
      if (!res) return null;
      return JSON.parse(res);
    },

    * set(key, value, maxAge) {
      maxAge = maxAge || ONE_DAY;
      value = JSON.stringify(value);
      yield redis.set(key, value, 'PX', maxAge);
    },

    * destroy(key) {
      yield redis.del(key);
    },
  };
};
