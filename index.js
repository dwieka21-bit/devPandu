// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })
const path = require('path')

//Register
fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'public'),
  prefix: '/', // optional: default '/'
})

// Declare a route
fastify.get('/', async (request, reply) => {
  return reply.sendFile('penjelasan.html') // serving path.join(__dirname, 'public', 'myHtml.html') directly
})

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