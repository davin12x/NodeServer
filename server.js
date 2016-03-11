var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.all('/*',function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","X-Requested-With","Content-Type,Accept");
    res.header("Access-Control-Allow-Methods","POST, GET");
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

var tutorial = [
    {
        id:1,
        title:"IOS TUTORIAl",
        description:"First part of tutorial",
        iframe:'<iframe width="560" height="315" src="https://www.youtube.com/embed/83WXmhin_LU?list=PL6gx4Cwl9DGDgp7nGSUnnXihbTLFZJ79B" frameborder="0" allowfullscreen></iframe>',thumbnail:"https://pbs.twimg.com/profile_images/638751551457103872/KN-NzuRl.png"
        
    },
    {
        id:2,
        title:"Google",
        description:"second part of tutorial",
        iframe:'<iframe width="560" height="315" src="https://www.youtube.com/embed/GSzpOreCu5g" frameborder="0" allowfullscreen></iframe>',thumbnail:"https://www.google.ca/doodle4google/images/splashes/featured.png"
        
    }  
];
app.get('/tutorials',function(req,res){
    console.log("Get From server");
    res.send(tutorial);
    //res.json(tutorial);
});
app.listen(3000);