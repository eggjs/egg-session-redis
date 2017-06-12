# egg-session-redis

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-session-redis.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-session-redis
[travis-image]: https://img.shields.io/travis/eggjs/egg-session-redis.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-session-redis
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-session-redis.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-session-redis?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-session-redis.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-session-redis
[snyk-image]: https://snyk.io/test/npm/egg-session-redis/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-session-redis
[download-image]: https://img.shields.io/npm/dm/egg-session-redis.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-session-redis

A session extension for store session in redis.

## Install


```bash
$ npm i egg-session-redis egg-redis --save
```

## Usage

This module dependent on [egg-redis] plugin, so we must enable both.

```js
// {app_root}/config/plugin.js
exports.sessionRedis = {
  enable: true,
  package: 'egg-session-redis',
};

exports.redis = {
  enable: true,
  package: 'egg-redis',
};
```

## Configuration

If we only have one redis instance:

```js
// {app_root}/config/config.default.js

exports.redis = {
  host: 'your redis host',
  port: 'your redis port',
  /* other redis config */
};

// no need to set any sessionRedis config
```

If we have more than one redis instance, we need to configure which instance to be used as session store.

```js
// {app_root}/config/config.default.js

exports.redis = {
  clients: {
    session: { /* config */ },
    cache: { /* config */ },
  },
};

exports.sessionRedis = {
  name: 'session', // specific instance `session` as the session store
};
```

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)

[egg-redis]: https://github.com/eggjs/egg-redis
