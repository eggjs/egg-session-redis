'use strict';

const assert = require('assert');

const ONE_DAY = 1000 * 60 * 60 * 24;

module.exports = app => {
  const name = app.config.sessionRedis.name;
  const redis = name ? app.redis.get(name) : app.redis;
  assert(redis, `redis instance [${name}] not exists`);

  app.sessionStore = {
    async get(key) {
      const res = await redis.get(key);
      if (!res) return null;
      return JSON.parse(res);
    },

    async set(key, value, maxAge) {
      maxAge = maxAge || ONE_DAY;
      value = JSON.stringify(value);
      await redis.set(key, value, 'PX', maxAge);
    },

    async destroy(key) {
      await redis.del(key);
    },
  };
};
