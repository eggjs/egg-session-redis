'use strict';

/**
 * session-redis default config
 * @member Config#sessionRedis
 * @property {String} name - redis instance name
 */
exports.sessionRedis = {
  name: '', // if name present, use `app.redis[name]` for session store
};
