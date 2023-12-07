// Create Web Server with Express and Node.js - 3. Routing
// Run: node comments.js
var express = require('express');
var app = express();
var router = express.Router();

// 1. GET method
router.get('/get', function(req, res) {
    res.send('GET request to homepage');
});

// 2. POST method
router.post('/post', function(req, res) {
    res.send('POST request to homepage');
});

// 3. PUT method
router.put('/put', function(req, res) {
    res.send('PUT request to homepage');
});

// 4. DELETE method
router.delete('/delete', function(req, res) {
    res.send('DELETE request to homepage');
});

app.use('/comments', router);

var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port);
});





