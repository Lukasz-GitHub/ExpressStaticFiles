var express = require('express');
var app = express();
// Folder przechowujący pliki do serwerowania
app.use(express.static('assets'));

app.get('/', function(res, req) {
    res.sendFile('/index.html');
});
//  Endpoint, do którego będziemy kierować nasz formularz. 
app.get('/userform', function (req, res) {
    const response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    res.end(JSON.stringify(response)); // Obiekt przetworzony na typ string za pomocą metody JSON.stringify. 
});

var server = app.listen(3000, 'localhost', function() {
    var host = server.address().address;
    var port = server.address().port;
    
    console.log('Aplikacja nasłuchuje na http://' + host + ':' + port)
})
