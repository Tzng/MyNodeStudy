var express = require('express');
const user = require('./user');
var app = express();

app.use('/users',user);

app.get('/', function (req, res) {
    let a = req.path;
    console.log(a);
   res.send('Hello World');
})

app.use((req,res,next) => {
    res.status(404).send('无效的请求')
})

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})