const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;
let items=[];
app.set("view engine","ejs");
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function(req, res) {
  let today= new Date();
  let options={
    weekday:"long",
    day:"numeric",
    month:"long"

  }
  let day=today.toLocaleDateString("en-US",options);
   res.render("list",{kind : day, newlist:items});

});
app.post("/",function(req,res){
let item=req.body.n1;
items.push(item);
res.redirect("/");
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

