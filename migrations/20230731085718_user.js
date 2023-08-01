/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("users",table => {
        table.increments("id").primary();
        table.string("name").notNullable();
        table.string("username").notNullable().unique();
        table.string("password").notNullable();
        table.string("email").notNullable();
        table.bigInteger("phoneNumber",10);
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now());
        })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
