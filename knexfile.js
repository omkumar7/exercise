// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: 'exercise',
      user:     'root',
      password: 'omkumar1'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'exercise',
      user:     'root',
      password: 'omkumar1'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      database: 'exercise',
      user:     'root',
      password: 'omkumar1'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
