require('dotenv').config()

module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgres://localhost/kittens-development'
  },
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  }

};
