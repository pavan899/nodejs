var mysql = require('mysql');
var http = require('http');
const express = require('express');
const app = express();
const port = 3005;

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Warehouse*123#',
    database: 'myhome'
});

// conn.connect((err)=>{
//     if(err)
//     throw err;
//     console.log("connection successful...");
// });

// DB - manual_watering
// id, onwater - boolean, 

app.get('/manualWater', (req, res) => {
    res.send('Hello World!')
})

// conn.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "ALTER TABLE manual_watering ADD( timestamp TIMESTAMP WITH TIME ZONE NOT NULL )";
//     conn.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("Table altered");
//     });
// });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})