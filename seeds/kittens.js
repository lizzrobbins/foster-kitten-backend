// name - text
// gender - text
// birth_date - timestamp (nullable)
// foster_id - integer


exports.seed = function(knex, Promise) {
  return knex('kittens').del()
    .then(function () {
      return knex('kittens').insert([
        {
          'name': 'Moonshine',
          'gender': 'female',
          'birth_date': '2018-05-05',
          'foster_id': '1'
        },
        {
          'name': 'Cheddar',
          'gender': 'male',
          'birth_date': '2018-05-15',
          'foster_id': '2'
        },
        {
          'name': 'Sherpa',
          'gender': 'male',
          'birth_date': '2016-05-05',
          'foster_id': '2'
        }
      ]);
    });
};
