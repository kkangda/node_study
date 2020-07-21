var express = require('express');
var app = express();

// 위의 두 줄은 1. express를 로드하고 2. express 모듈이 app을 반환한다

app.get('/', function(req, res){
    res.send('Hello homepage');
});
app.get('/login', function(req,res){
    res.send('<h1>Login please</h1>')
});
app.listen(3000, function(){
    console.log('Connected 3000 port!');
});