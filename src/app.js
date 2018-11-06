var express = require("express");
var fs = require("fs");
const path = require("path");
var app = express();

app.set("port", process.env.PORT || 3000);
// app.use(express.static("public"));

app.get('/', function (req, res) {
    res.send('Hello World!');
  });
app.get("/", function(req, res) {
    res.type("text/plain");
    res.status(200);
    res.send("hellow world , This is Menu.html");
})

app.get("/about", function(req, res) {
    res.type("text/html");
    
    const html = fs.readFileSync(path.join(__dirname, "./public/about.html"), "utf8");
    res.status(200);
    res.send(html);
})

app.use(function(req, res) {
    res.type("text/plain");
    res.status(404);
    res.send("404-not-found");
});

app.use(function(err, req, res, next) {
    console.log(err.stack); 
    
    res.type("text/plain");
    res.status(500);
    res.send("500 server error");
});

app.listen(app.get("port"), function() {
    console.log(`
        Express started on http://localhost:${app.get("port")}
    `);
    
})