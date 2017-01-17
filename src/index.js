module.exports = redis_extra

const {RedisClient} = require('redis')
const commands = require('redis-commands')
const thenify = require('thenify')

// const client = redis.createClient(redis_config).on('error', e => {
//   console.error(`Fails to connect to redis server.\n\n${e.stack || e}`)
//   process.exit(1)
// })


class RedisExtra extends RedisClient {
  constructor (options) {
    super(options)
  }
}


function redis_extra (options) {
  return new RedisExtra(options)
}

redis_extra.RedisExtra = RedisExtra


function normalize_redis_command (command) {
  return command.replace(/(?:^([0-9])|[^a-zA-Z0-9_$])/g, '_$1')
}

commands.list.forEach(command => {
  command = normalize_redis_command(command)

  const method = RedisExtra.prototype[command]
  if (!method) {
    return
  }

  RedisExtra.prototype[command] = thenify(method)
})
