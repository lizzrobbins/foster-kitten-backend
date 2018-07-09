// name - text
// gender - text
// birth_date - timestamp (nullable)
// foster_id - integer

exports.up = function(knex, Promise) {
  return knex.schema.createTable('kittens', (table) => {
    table.increments()
    table.text('name')
    table.text('gender')
    table.timestamp('birth_date')
    table.integer('foster_id').references('fosters.id').onDelete('CASCADE')
    table.timestamp('created_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('kittens')
};
