exports.up = function (knex) {
  return knex.schema.createTable("cards", function (table) {
    table.increments().primary();
    table.integer("card_value");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("cards");
};
