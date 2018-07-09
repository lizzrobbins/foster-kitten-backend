// name - text
// address - text
// created_at - timestamp


exports.seed = function(knex, Promise) {
  return knex('fosters').del()
    .then(function () {
      return knex('fosters').insert([
        {
          'id': 1,
          'name': 'Jay Klara',
          'address': 'asdf'
        },
        {
          'id': 2,
          'name': 'Nicole Hammers',
          'address': 'asdf'
        }
      ]);
    });
};
