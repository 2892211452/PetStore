var express = require('express');  //引入express模块
var app = express();  //创建express的实例
app.use(express.static('static/cpts_1444_cgx/'));
app.use(express.static('static/html/'));
app.use(express.static('static/user/'));




app.get('/', function (req, res) {
    res.sendFile(__dirname+"/static/test.html");
  })

app.get('/user', function (req, res) {
    res.sendFile(__dirname+"/static/user/user2.html");
  })
app.get('/main',function(req, res){
    res.sendFile(__dirname+"/static/cpts_1444_cgx/index.html")
}
)
app.get('/clasify',function(req, res){
    res.sendFile(__dirname+"/static/cpts_1444_cgx/clasify.html")
}
)
app.get('/kind',function(req, res){
    res.sendFile(__dirname+"/static/cpts_1444_cgx/kind.html")
}
)
app.get('/single',function(req, res){
    res.sendFile(__dirname+"/static/cpts_1444_cgx/single.html")
}
)
app.get('/search',function(req, res){
    res.sendFile(__dirname+"/static/cpts_1444_cgx/search.html")
}
)
app.get('/login',function(req, res){
    res.sendFile(__dirname+"/static/html/index.html")
}
)
app.get('/bill',function(req, res){
    res.sendFile(__dirname+"/static/cpts_1444_cgx/bill.html")
}
)

app.listen(3000,function(){   //监听3000端口
    console.log("Server running at 3000 port");
});

