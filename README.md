[![Build Status](https://travis-ci.org/kaelzhang/node-redis-extra.svg?branch=master)](https://travis-ci.org/kaelzhang/node-redis-extra)
<!-- optional appveyor tst
[![Windows Build Status](https://ci.appveyor.com/api/projects/status/github/kaelzhang/node-redis-extra?branch=master&svg=true)](https://ci.appveyor.com/project/kaelzhang/node-redis-extra)
-->
<!-- optional npm version
[![NPM version](https://badge.fury.io/js/redis-extra.svg)](http://badge.fury.io/js/redis-extra)
-->
<!-- optional npm downloads
[![npm module downloads per month](http://img.shields.io/npm/dm/redis-extra.svg)](https://www.npmjs.org/package/redis-extra)
-->
<!-- optional dependency status
[![Dependency Status](https://david-dm.org/kaelzhang/node-redis-extra.svg)](https://david-dm.org/kaelzhang/node-redis-extra)
-->

# redis-extra

redis with promisified commands.

## Install

```sh
$ npm install redis-extra --save
```

## Usage

```js
const redis = require('redis-extra')
const red = redis(options)

red.set('foo', 1)
.then(() => {
  return red.get('foo')
})
.then(value => console.log(value))  // 1
```

- options `Object=` [redis options](https://www.npmjs.com/package/redis#options-object-properties)

## License

MIT
