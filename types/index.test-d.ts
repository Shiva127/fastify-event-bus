import { FastifyInstance, FastifyPluginCallback } from 'fastify'
import fastify from 'fastify'
import { expectAssignable, expectType } from 'tsd'

import { fastifySchedule as fastifyScheduleNamed } from '.'
import fastifyScheduleDefault from '.'
import * as fastifyScheduleStar from '.'
import fastifyScheduleCjsImport = require('.')
const fastifyScheduleCjs = require('./')

const app: FastifyInstance = fastify()

app.register(fastifyScheduleNamed)
app.register(fastifyScheduleDefault)
app.register(fastifyScheduleStar.default)
app.register(fastifyScheduleStar.fastifySchedule)
app.register(fastifyScheduleCjsImport.default)
app.register(fastifyScheduleCjsImport.fastifySchedule)
app.register(fastifyScheduleCjs)

expectType<FastifyPluginCallback>(fastifyScheduleNamed)
expectType<FastifyPluginCallback>(fastifyScheduleDefault)
expectType<FastifyPluginCallback>(fastifyScheduleStar.default)
expectType<FastifyPluginCallback>(fastifyScheduleStar.fastifySchedule)
expectType<FastifyPluginCallback>(fastifyScheduleCjsImport.default)
expectType<FastifyPluginCallback>(fastifyScheduleCjsImport.fastifySchedule)
expectType<any>(fastifyScheduleCjs)

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
