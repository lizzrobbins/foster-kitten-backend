const db = require('./connection')

function getFostersByName(name) {
  return db('fosters').select('*').where('name', 'ilike', '%' + name + '%')
}

function getKittensForFosters(ids) {
  return db('kittens').select('*').whereIn('foster_id', ids)
}

module.exports = {
  getFostersByName,
  getKittensForFosters
}
