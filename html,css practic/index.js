
// const hbs = require('hbs');
// const path = require("path");
const express = require("express");
const app = express();



// const staticpath = path.join(__dirname,"../public");

// app.set("view engine","hbs");

// const viewspath =path.join(__dirname,"../views");
// console.log(viewspath);
// app.set("views", viewspath);

// app.use(express.static(staticpath));


app.get("/about",(req, res)=>{
    res.status(200).send("hello this is node");
});

app.get("", (req, res) => {
    // res.render(__dirname + "/views/index.hbs");
    res.render("index.hbs",{title: "helo kese hai aap"});
});




app.listen(8000, ()=>{
    console.log(`listening to the port no. 800`);
})