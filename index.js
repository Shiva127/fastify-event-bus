const jsEventBus = require('js-event-bus')
const fp = require('fastify-plugin')

function fastifyEventBus (fastify, options, done) {
  fastify.decorate('eventBus', jsEventBus())

  done()
}

module.exports = fp(fastifyEventBus, {
  fastify: '4.x',
  name: 'fastify-event-bus'
})
