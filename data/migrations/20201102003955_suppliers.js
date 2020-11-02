
exports.up = function(knex) {
    return knex.schema.createTable('suppliers', table => {
        table.increments();
        table.string('firstName').notNullable();
        table.string('lastName').notNullable()
        table.string('location').notNullable();
        table.string('contactInfo').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('suppliers');
};

