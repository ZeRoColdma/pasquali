exports.up = function (knex) {
  return knex.schema.createTable("user_history", function (table) {
    table.increments().primary();
    table.text("history");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("user_history");
};
