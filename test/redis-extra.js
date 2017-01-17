const test = require('ava')
const redis = require('..')

test('get', t => {
  const red = redis({
    host: '127.0.0.1',
    port: 6379
  })

  red.set('a', 1)
  .then(() => {
    return red.get('a')
  })
  .then((value) => {
    t.is(value, 1)
    t.end()
  })
})
