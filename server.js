var express = require('express');
var app = express();


app.engine('html', require('ejs').renderFile);

app.use("/static", express.static("public"));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.get('/', function (req, res) {
    res.render("index.html");
})

app.listen(4000, function(){
    console.log("listening port 4000 now");
})
