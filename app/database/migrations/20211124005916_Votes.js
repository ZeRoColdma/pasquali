exports.up = function (knex) {
  return knex.schema.createTable("votes", function (table) {
    table.increments().primary();
    table.integer("user_id");
    table.integer("card_id");
    table.integer("history_id");
    table.integer("vote");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("votes");
};
