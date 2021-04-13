const Pool = require('pg').Pool
const pool = new Pool({
    user: 'username',
    host: 'localhost',
    database: 'databaseName',
    password: 'myPassword',
    port: 5432,
});

const getRaces = () => {
    return new Promise(function(resolve, reject) {
        pool.query('SELECT * FROM tablename ORDER BY id ASC', (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(resules.rows);
        })
    })
}

const createRaces = (body) => {
    return new Promise(function(resolve, reject){
        const { raceName, order } = body
        pool.query('INSERT INTO tablename (raceName, order) VALUES ($1, $2) RETURNING *', [raceName, order], (error, results) => {
            if (error){
                reject(error)
            }
            resolve(`A new race has been added added: ${results.rows[0]}`)
        })
    })
}

const deleteRaces = () => {
    return new Promise(function(resolve, reject) {
      const id = parseInt(request.params.id)
      pool.query('DELETE FROM tablename WHERE id = $1', [id], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(`Race deleted with ID: ${id}`)
      })
    })
}

module.exports = {
    getRaces,
    createRaces,
    deleteRaces,
}