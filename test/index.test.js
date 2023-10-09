const tap = require('tap')
const test = tap.test
const fastify = require('fastify')
const fastifyEventBus = require('..')

test('Use an event', t => {
  t.plan(2)

  const server = fastify()
  server.register(fastifyEventBus)
  server.ready((error) => {
    t.error(error)

    process.nextTick(() => server.eventBus.emit('test'))

    server.eventBus.on('test', t.pass)
  })
})
