const db = require('../config/dbConfig');

module.exports = {
    addSupplier: function(supplier) {
        return db('suppliers')
            .insert(supplier)
            .returning('id')
            .then(([id]) => {
                return this.findBy({ id }, 'suppliers');
            });
    },
    findBy: function(filter, table) {
        return db(table)
            .where(filter)
            .first()
    },
    findProductsBy: function(filter) {
        return db('products')
            .where(filter)
    },
    addProduct: function(product) {
        return db('products')
            .insert(product)
            .returning('id')
            .then(([id]) => {
                return this.findBy({ id }, 'products');
            });
    },
    removeSupplier: function(id) {
        return db('suppliers')
            .where({ id })
            .delete()
    },
    removeProduct: function(id) {
        return db('products')
            .where({ id })
            .delete()
    },
    getSuppliers: function() {
        return db('suppliers')
            .select('*')
    },
    getProducts: function(supplierId) {
        return db('products')
            .select('*')
            .where(supplierId)
    }
}