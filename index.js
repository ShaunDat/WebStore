var {Pool, Client} = require('pg')
var client = new Client({
host: 'ec2-54-196-65-186.compute-1.amazonaws.com',
database: 'dcursvpqp35c4j',
user: 'uyunzorfjbwixv',
password: '1eca7dafc10d64dd1430227c744f91a3b4c868a08b16497968d1cb78cd17c315',
port: 5432,
})
client.connect()
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    /*Create a table named "customers":*/
    var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
  });
  connect,index.php;
  