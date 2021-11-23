module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "172.22.0.2",
      database: "pasquali",
      user: "postgres",
      password: "postgres",
      port: 5432,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./app/database/migrations",
      tableName: "pasquali_teste",
    },
  },
};
