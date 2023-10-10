import fastify, { FastifyInstance, FastifyPluginCallback } from 'fastify'
import { expectAssignable, expectType } from 'tsd'

import { fastifyEventBus as fastifyEventBusNamed } from '.'
import fastifyEventBusDefault from '.'
import * as fastifyEventBusStar from '.'
import fastifyEventBusCjsImport = require('.')
const fastifyEventBusCjs = require('./')

const app: FastifyInstance = fastify()

app.register(fastifyEventBusNamed)
app.register(fastifyEventBusDefault)
app.register(fastifyEventBusStar.default)
app.register(fastifyEventBusStar.fastifyEventBus)
app.register(fastifyEventBusCjsImport.default)
app.register(fastifyEventBusCjsImport.fastifyEventBus)
app.register(fastifyEventBusCjs)

expectType<FastifyPluginCallback>(fastifyEventBusNamed)
expectType<FastifyPluginCallback>(fastifyEventBusDefault)
expectType<FastifyPluginCallback>(fastifyEventBusStar.default)
expectType<FastifyPluginCallback>(fastifyEventBusStar.fastifyEventBus)
expectType<FastifyPluginCallback>(fastifyEventBusCjsImport.default)
expectType<FastifyPluginCallback>(fastifyEventBusCjsImport.fastifyEventBus)
expectType<any>(fastifyEventBusCjs)

expectAssignable<Function>(app.eventBus.on)
expectAssignable<Function>(app.eventBus.once)
expectAssignable<Function>(app.eventBus.exactly)
expectAssignable<Function>(app.eventBus.die)
expectAssignable<Function>(app.eventBus.off)
expectAssignable<Function>(app.eventBus.detach)
expectAssignable<Function>(app.eventBus.detachAll)
expectAssignable<Function>(app.eventBus.emit)

app.eventBus.on('test', () => {})
app.eventBus.once('test', () => {})
app.eventBus.exactly(1, 'test', () => {})
app.eventBus.die('test')
app.eventBus.off('test')
app.eventBus.detach('test')
app.eventBus.detach('test', () => {})
app.eventBus.detachAll()
app.eventBus.emit('test')
app.eventBus.emit('test', this)
app.eventBus.emit('test', null, 1, '1', [1], {1: 1})
app.eventBus.emit('test', this, 1, '1', [1], {1: 1})
