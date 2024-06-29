const express = require("express");
const app = express();
const port = 5050;

app.use(express.urlencoded({extended: true}));

app.get("/register", (req, res)=>{
    let {user, password} = req.query;
    res.send(`satnderd GET response. Welccome ${user} !`);
});

app.post("/register", (req, res)=>{
    console.log(req.body);
    res.send("standard POST response");
});

app.listen(port, ()=>{
    console.log(`listening to port ${port}`);
});