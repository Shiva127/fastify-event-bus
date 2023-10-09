# fastify-event-bus

[![CI](https://github.com/Shiva127/fastify-event-bus/actions/workflows/ci.yml/badge.svg)](https://github.com/Shiva127/fastify-event-bus/actions/workflows/ci.yml)
[![npm](https://img.shields.io/npm/v/fastify-event-bus)](https://www.npmjs.com/package/fastify-event-bus)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Event bus support for [Fastify](https://github.com/fastify/fastify). Built upon [js-event-bus](https://github.com/bcerati/js-event-bus).

## Install

``` shell
yarn add fastify-event-bus
# or
npm install fastify-event-bus
```

## Usage

```JavaScript
import Fastify from "fastify";

const fastify = Fastify();

await fastify.register(import("fastify-event-bus"));
await fastify.register(import("@fastify/websocket"));

fastify.get("/ws", { websocket: true }, (connection, request) => {
  function sendHello(who) {
    request.log.debug(`Send Hello ${who}!`);
    connection.socket.send(`Hello ${who}!`);
  }
  fastify.eventBus.on("hello.send", sendHello); // <- register to the event

  connection.socket.on("close", () => {
    fastify.eventBus.detach("hello.send", sendHello); // <- detach the event
  });
});

fastify.get("/hello-world", async (request, reply) => {
  fastify.eventBus.emit("hello.send", null, "World"); // <- emit the event
});

await fastify.listen({ port: 3000 });
```

For more information and options, you can check [js-event-bus API documentation](https://github.com/bcerati/js-event-bus#api-of-the-library).

## License

Copyright [Gilles Marchand](https://github.com/Shiva127), licensed under [MIT](./LICENSE).
