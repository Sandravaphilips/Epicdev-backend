const knex = require('knex');
const dotenv = require('dotenv');

dotenv.config()

const knexConfig = require('../knexfile');

const environment = process.env.NODE_ENV || 'development'

module.exports = knex(knexConfig[environment]);