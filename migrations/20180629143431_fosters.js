// name - text
// address - text
// created_at - timestamp


exports.up = function(knex, Promise) {
  return knex.schema.createTable('fosters', (table) => {
    table.increments()
    table.text('name')
    table.text('address')
    table.timestamp('created_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('fosters')
};
