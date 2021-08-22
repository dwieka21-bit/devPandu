async function routes(fastify, options) {
    fastify.get('/proses.html', async (request, reply) => {
        reply.view('/public/proses.ejs', { desc: 'PROSES' }) // serving path.join(__dirname, 'public', 'myHtml.html') directly
      });
}

module.exports = routes;