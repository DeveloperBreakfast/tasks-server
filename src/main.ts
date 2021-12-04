import Fastify from 'fastify';

const fastify = Fastify({
  logger: {
    prettyPrint: {
      translateTime: 'HH:MM:ss Z',
      ignore: 'pid,hostname',
    },
  },
});

fastify.listen(3000, (err) => {
  if (err) {
    throw err;
  }

  fastify.log.info(fastify.printRoutes());
});
