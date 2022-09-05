var express = require('express');
var app = express();


app.get('/', (req, res) => {
    res.send("<h1>Hello from Node App with Nginx Reverse Proxy</h1>")
})
// define routes here..

var server = app.listen(5000, () => {
    console.log('Node server is running..');
});