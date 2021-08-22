// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })
const path = require('path')
const fastifyEnv = require('fastify-env')


//Register
fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'public'),
  prefix: '/', // optional: default '/'
});
fastify.register(require('point-of-view'), {
  engine: {
    ejs: require('ejs')
  }
});
fastify.register(require('fastify-postgres'), {
  connectionString: process.nextTick.PGSTRING
})

//Register Custom routes
fastify.register(require("./routes/ssr"));
// Declare a route
fastify.get('/', async (request, reply) => {
  return reply.sendFile('penjelasan.html') // serving path.join(__dirname, 'public', 'myHtml.html') directly
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen(process.env.PORT)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start();