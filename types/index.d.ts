import { FastifyPluginCallback } from 'fastify'
import eventBus from 'js-event-bus'

declare module 'fastify' {
  interface FastifyInstance {
    eventBus: eventBus
  }
}

type FastifyEventBus = FastifyPluginCallback

declare namespace fastifySchedule {
  export const fastifySchedule: FastifyEventBus
  export { fastifySchedule as default }
}

declare function fastifySchedule(): ReturnType<FastifyEventBus>
export = fastifySchedule
