
exports.up = function(knex) {
    return knex.schema.createTable('products', table => {
        table.increments();
        table.string('name').notNullable();
        table.string('sku').unique().notNullable()
        table.float('price').notNullable();
        table.integer('supplierId').unsigned().notNullable().references('id').inTable('product.suppliers').onUpdate('CASCADE').onDelete('CASCADE');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('products');
};

