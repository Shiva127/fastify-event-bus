import { FastifyPluginCallback } from 'fastify'
import eventBus from 'js-event-bus'

declare module 'fastify' {
  interface FastifyInstance {
    eventBus: eventBus
  }
}

type FastifyEventBus = FastifyPluginCallback

declare namespace fastifyEventBus {
  export const fastifyEventBus: FastifyEventBus
  export { fastifyEventBus as default }
}

declare function fastifyEventBus(): ReturnType<FastifyEventBus>
export = fastifyEventBus
