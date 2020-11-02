
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('suppliers').del()
    .then(function () {
      // Inserts seed entries
      return knex('suppliers').insert([
        {id: 1, firstName: 'Alexa', lastName: 'Sawyer', location: 'Johannesburg, South Africa', contactInfo: 'supplier1@seeds.com'},
        {id: 2, firstName: 'Brittany', lastName: 'Scott', location: 'Johannesburg, South Africa', contactInfo: 'supplier2@seeds.com'},
        {id: 3, firstName: 'Julian', lastName: 'Davies', location: 'Johannesburg, South Africa', contactInfo: 'supplier3@seeds.com'}
      ]);
    });
};
