module.exports ={ 
  options: {
    confKey: 'config', // optional, default: 'config'
    schema: {
        type: 'object',
        required: [ 'PORT' ],
        properties: {
          PORT: {
            type: 'string',
            default: 3000,
          }
        }
      },
    data: data, // optional, default: process.env
    dotenv: {
        path: `${__dirname}/.env`,
        debug: true
      }
  }}