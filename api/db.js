const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: 'mysecretpassword',
    host: "178.128.111.201",
    port: 5432,
    database: "DBSHack"
})

module.exports = pool;