
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {id: 1, name: 'Shoes', sku: 'WE488FJ9IF9', price: 35.87, supplierId: 1},
        {id: 2, name: 'Glasses', sku: 'RSN37336UHF', price: 45.87, supplierId: 2},
        {id: 3, name: 'Shirts', sku: 'QUI658289HB', price: 55.87, supplierId: 1}
      ]);
    });
};
