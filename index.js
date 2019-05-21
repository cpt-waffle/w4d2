const { Client } = require('pg')
const client = new Client({
  user: 'random',
  password: 'password',
  database: 'w4d2_schema',
  hostname: 'localhost',
  port: 5432,
  ssl: true
})

client.connect((err) => {
  if (err) {
    return console.log(err)
  } else {
    console.log("We are connected to the DB")

    // client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
    //   console.log(err ? err.stack : res.rows[0].message) // Hello World!
    //   client.end()
    // })
    function getUserWithId(id, callback) {
      client.query('SELECT * FROM students WHERE students.id = $1::integer', [id], (err, res) => {
        console.log(err ? err.stack : res.rows)
        // client.end()
        // callback(res.rows);
      })
    }

    getUserwithReviews = () => {
      client.query('SELECT * FROM students JOIN quiz_results ON students.quiz_results_id = quiz_results.id', (err, res) => {
        console.log(err ? err.stack : res.rows)
        // client.end()
        // callback(res.rows);
      })
    }

  }


})